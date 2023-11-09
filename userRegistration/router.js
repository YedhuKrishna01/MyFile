import { Router } from "express";
import auth from "./middlewares/auth.js";
import * as userHandler from "./request-handler.js";
const router = Router()
router.route("/register").post(userHandler.register);
router.route("/login").post(userHandler.login);
router.route("/profile").get(auth,userHandler.profile);
router.route("/add-note").post(auth,userHandler.addNote);
router.route("/get-note").get(auth,userHandler.getNote);
export default router;