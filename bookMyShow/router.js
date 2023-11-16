import { Router } from "express";
import * as rh from "./request-handler.js";
const router = Router();
router.route("/add").post(rh.add);

export default router;