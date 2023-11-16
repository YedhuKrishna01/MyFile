import express from "express";
import router from "./router.js";
import morgan from "morgan";
import dotenv from "dotenv";
import conn from "./connection.js";
import path from "path";

dotenv.config();
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("tiny"));
server.use("/", express.static("./static"));
server.use('/images', express.static('images'));

// Store movie data
let movies = [];

server.use("/api", router);

// Endpoint to add a movie
server.post("/api/addMovie", (req, res) => {
    const { movieName, posterURL } = req.body;

    if (movieName && posterURL) {
        movies.push({ movieName, posterURL });
        res.status(200).json({ success: true, message: "Movie added successfully." });
    } else {
        res.status(400).json({ success: false, message: "Invalid movie data." });
    }
});

// Endpoint to get all movies
server.get("/api/getMovies", (req, res) => {
    res.status(200).json({ success: true, movies });
});

conn().then(() => {
    server.listen(process.env.PORT, (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("Server started on port 3000");
    });
}).catch((error) => {
    console.log(error);
});
