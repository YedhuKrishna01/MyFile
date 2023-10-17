const http = require("http");
const url = require("url");
const port = 3000;
const server = http.createServer((req,res)=>{
    let path = url.parse(req.url).pathname;
    if(path ==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
        <form action="/api" method ="get">
        <h3>Enter your Username:</h3>
        <input type="text" class="username" name = "username">
        <h3>Enter your Emailid:</h3>
        <input type="email" name = "email">
        <input type = "submit">
        </form>`);
        res.end();
    }
    if(path==="/api"){
        console.log(url.parse(req.url,true).query);
        res.write(`Username is ${ /^[a-z0-9]{4,}$/.test(query.username)? "Valid":"Invalid"});
        Email is ${ /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,6}$/.test(query.email)? "Valid":"Invalid"}`);
        res.end();
    }
});
server.listen(port, error =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server started on port " + port);
    }
});

