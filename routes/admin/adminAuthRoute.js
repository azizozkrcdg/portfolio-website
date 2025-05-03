import adminAuthController from "../../controllers/admin/adminAuthController.js";
import express from "express";

const router = express.Router();

// admin login routes
router.get("/", adminAuthController.getLoginPage);
router.post("/", adminAuthController.login);
router.post("/register", adminAuthController.createAdmin);
router.get("/logout", adminAuthController.logout);
router.post("/delete/:id", adminAuthController.deleteAdmin);

export default router;