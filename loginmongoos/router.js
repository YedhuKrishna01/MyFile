import { Router } from "express";
import * as rh from "./request-handler.js";
import auth from "./middlewares/auth.js"

const router = Router();
router.route("/").post(rh.setData);
router.route("/get-data").get(rh.getData);
router.route("/update-data").put(rh.updateData);
router.route("/delete-data").delete(rh.deleteData);
router.route("/users/:id").get(middleware,rh.users);
router.route("/register").post(rh.register);
router.route("/login").post(rh.login);
router.route("/get-private-data").get(auth,rh.getPrivateData);
export default router;
function middleware(req,res,next){
    let query= req.query;
    if(query.pass=="true"){
        next();
    }else{
        res.json("Not passed")
    }
}