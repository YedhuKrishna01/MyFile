import express from "express";
import router from "./router.js";
import morgan from "morgan";

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("combines"));
server.use(middleware)
server.use("/", express.static("./static"));
server.use("/api", router);

server.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Server started on port ${port}`);
});

function middleware(req,res,next){
    let query = req.query;
    if(query.pass == "true"){
        next();
    }else{
        res.json("not passed")
    }
}

