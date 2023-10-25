import http from 'http';
import fs from 'fs';
import fsp from "fs/promises";
import url from 'url';
const port = 3200;

const server = http.createServer((req, res) => {
  let path = url.parse(req.url).pathname;

  if (path === '/') {
    fs.promises.readFile('./index.html', 'utf-8')
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      })
      .catch((error) => {
        console.error('Error reading index.html:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      });
  }

  if (path === '/api') {
    let query = url.parse(req.url, true).query;
    fs.promises.readFile('./data.json', 'utf-8')
      .then((data) => {
        let list = data === '' ? [] : JSON.parse(data);
        list.push(query);
        return fs.promises.writeFile('./data.json', JSON.stringify(list));
      })
      .then(() => {
        res.write(`Username is ${/^[a-z0-9]{4,}$/.test(query.username) ? 'Valid' : 'Invalid'}
Email is ${/^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,6}$/.test(query.email) ? 'Valid' : 'Invalid'}`);
        res.end();
      })
      .catch((error) => {
        console.error('Error reading/writing data.json:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      });
  }
});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Server started on port ' + port);
  }
});
