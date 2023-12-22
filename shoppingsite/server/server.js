import express from "express";
import connect from "./connection.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3200;
const app = express();

app.get("/",(req, res)=>{
    res.send("hello")
})


app.listen(PORT,()=>{
    console.log("Server is running on port 3200")
})