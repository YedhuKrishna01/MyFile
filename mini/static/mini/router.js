import { Router } from "express";
import * as rh from "./req-handler.js";
import fs from "fs";

const router = Router();

router.route("/").get(rh.getData).post(rh.addTodo).delete(rh.deleteTodo).put(rh.editTodo);

export default router;