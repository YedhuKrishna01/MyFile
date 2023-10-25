const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/') {
        const filePath = path.join(__dirname, 'views', 'index.html');
        serveFile(res, filePath);
    } else if (method === 'POST' && url === '/register') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { username, email, password, confirmPassword } = parseFormData(body);

            if (password !== confirmPassword) {
                res.end('Passwords do not match');
            } else {
                const user = { username, email };
                fs.appendFile('users.txt', JSON.stringify(user) + '\n', (err) => {
                    if (err) throw err;
                    res.writeHead(302, { 'Location': '/profile' });
                    res.end();
                });
            }
        });
    } else if (method === 'GET' && url === '/profile') {
        const users = fs.readFileSync('users.txt', 'utf8').split('\n').filter(Boolean).map(JSON.parse);
        const user = users[users.length - 1];
        const profileHtml = renderProfile(user);
        res.end(profileHtml);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function serveFile(res, filePath) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(content);
        }
    });
}

function parseFormData(formData) {
    const data = {};
    formData.split('&').forEach((pair) => {
        const [key, value] = pair.split('=');
        data[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
    return data;
}

function renderProfile(user) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/style.css">
        </head>
        <body>
            <h1>Profile</h1>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
        </body>
        </html>
    `;
}

