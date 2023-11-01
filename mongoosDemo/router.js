import { Router } from "express";
import * as rh from "./request-handler.js";

const router = Router();
router.route("/").post(rh.setData);
router.route("/users/:id").get(middleware,rh.users)
export default router;

function middleware(req,res,next){
    let query= req.query;
    if(query.pass=="true"){
        next();
    }else{
        res.json("Not passed")
    }
}


