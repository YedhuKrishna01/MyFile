import express from "express";
import router from "./router.js";

const server = express();
const port = 3200;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", express.static("./static"));
server.use("/api", router);

server.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Server started on port ${port}`);
});
