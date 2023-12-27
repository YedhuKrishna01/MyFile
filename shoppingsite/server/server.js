import express from "express";
import router from "./router.js";
import connect from "./connection.js";
import path from "path";

const PORT = 3200;
const app = express();

app.use(express.json({
    limit: "5mb"
}))
app.use(express.static(path.resolve("./dist")));
app.use("/api", router);
app.get("/*",(req, res) => {
    return res.sendFile(path.resolve("./dist/index.html"));
})
app.all("/*",(req, res) => {
    return res.status(404).json({
        msg: "Not found!"
    })
})


app.listen(PORT,()=>{
    console.log("Server is running on port 3200")
})