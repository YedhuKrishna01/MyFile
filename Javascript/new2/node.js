const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 2000;
const server = http.createServer((req, res) => {
  let path = url.parse(req.url).pathname;
  if (path === "/") {
    fs.readFile("./index.html","utf-8",(error,data)=>{
        console.log(data);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    })
    
  }
  if (path === "/api") {
    let query = url.parse(req.url, true).query;
    fs.readFile("./data.json","utf-8",(error,data)=>{
        let list = data ===""? []:JSON.parse(data);
        list.push(query);
        fs.writeFile("./data.json",JSON.stringify(list),(error) =>{
            if(error){
                res.write("Error has occured");
            }
        })

    })
    res.write(`Todo list ${/^[a-z0-9]{4,}$/.test(query.toDoList) ? "Modified" : "Remains the same"}`);
    res.end();
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server started on port " + port);
  }
});
