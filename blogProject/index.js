import express from "express";
import { dirname } from "path";
import { fileURLToPath} from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.get("/",(req, res)=>{
    res.sendFile(_dirname+'/public/html/index.html')
})
app.get("/register",(req, res)=>{
    res.sendFile(_dirname+'/public/html/register.html')
})

app.get("/login",(req, res)=>{
    res.sendFile(_dirname+'/public/html/login.html')
})

app.get("/profile",(req, res)=>{
    res.sendFile(_dirname+'/public/html/profile.html')
})

app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
})