import express from "express";
import { dirname } from "path";
import { fileURLToPath} from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3200;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.get("/",(req, res)=>{
    res.sendFile(_dirname+'/public/html/index.html')
})

app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
})