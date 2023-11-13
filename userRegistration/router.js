import { Router } from "express";
import multer from "multer";
import auth from "./middlewares/auth.js";
import path from "path";
import * as userHandler from "./request-handler.js";

const storage = multer.diskStorage({
    destination:"./files",
    filename:(req, file, cb)=>{
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

const router = Router();
router.route("/register").post(userHandler.register);
router.route("/login").post(userHandler.login);
router.route("/profile").get(auth,userHandler.profile);
router.route("/add-note").post(auth,userHandler.addNote);
router.route("/get-note").get(auth,userHandler.getNote);
router.route("/file").post(upload.array("myfile",4),(req, res)=>{
    console.log(req.files);
    res.json("File stored")
})
router.route("/get-file/:file").get((req,res)=>{
    let fileName = req.params;
    res.sendFile(path.resolve(`./files/${fileName.file}`));
})
export default router;
