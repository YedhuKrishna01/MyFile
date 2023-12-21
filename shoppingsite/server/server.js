import express from "express";
import mongoose from "mongoose";


const PORT = 3000;
const app = express();

app.get("/",(req, res)=>{
    res.send("hello")
})


app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})