// let a = 21;
// console.log(a);
const http = require("http");
const port = 3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    let url = String(req.headers.referer);
    let api = url.split("3000/")[1];
    console.log(api);
    let form = `<form action="http://localhost:3000"><input type="text"><br><input type="submit"></form>`;
    res.write(form);
    res.end();

});
server.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server started on port " + port);
    }
});