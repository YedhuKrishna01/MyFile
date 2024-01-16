import { Router } from "express";

const router = Router();

router.route("/register").post(user.register);
router.route("/login").post(user.login);
router.route("/profile").get(Auth, user.profile);
router.route("/add-products").post(productUploader,product.addProduct);

export default router;