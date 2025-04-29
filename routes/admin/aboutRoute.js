import aboutController from "../../controllers/admin/aboutController.js";
import express from "express";


const router = express.Router();

router.get("/", aboutController.getAboutText);
router.post("/", aboutController.addAboutText);

export default router;
