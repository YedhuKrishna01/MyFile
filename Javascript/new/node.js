// let a = 21;
// console.log(a);
const http = require("http");
const port = 3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    console.log(req);
    let form = `<form><input type="text"><br><input type="submit"></form>`;
    res.write(form);
    res.end();

})
server.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server started on port " + port);
    }
})