import express from "express";
const server = express();
server.use("/",express.static("./static"))

server.get("/api",(req,res)=>{
    res.json("hello");
    console.log(req.query)
})

server.listen(3200,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server started on port: 3200");
});