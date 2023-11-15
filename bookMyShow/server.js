import express from "express";
import router from "./router.js";
import morgan from "morgan";
import dotenv from "dotenv";
import conn from "./connection.js"
dotenv.config();
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("tiny"));
server.use("/", express.static("./static"));
server.use('/images', express.static('images'));

server.use("/api", router);
conn().then(() => {
   server.listen(process.env.PORT, (error) => {
      if(error) {
         console.log(error);
         return;
      }
      console.log("Server started on port 3000");
   })
})
.catch((error)=>{
   console.log(error)
})