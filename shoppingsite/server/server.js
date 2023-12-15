import express from "express";

const PORT = 3000;
const app = express();

app.get("/",(req, res)=>{
    console.log("HELLO")
})


app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})