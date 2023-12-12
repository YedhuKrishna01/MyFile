import express from "express";

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", express.static("./static"));
server.get("/",(req,res)=>{
    res.send("Hello")
})
server.use('/images', express.static('images'));

server.listen(PORT,()=>{
    console.log("Server is working on port 3000")
})