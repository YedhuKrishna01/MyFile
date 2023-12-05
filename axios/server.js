import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", express.static("./public"));
server.use("/api", router);



conn().then(()=>{
    server.listen(process.env.PORT,(error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(`Server started`);
    });
})
.catch(error=>{
    console.log(error);
})
