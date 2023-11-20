import express from "express";


const port = 3200;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
    res.sendFile()
})

app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
})