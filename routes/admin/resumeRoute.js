import resumeController from "../../controllers/admin/resumeController.js";
import express from "express";

const router = express.Router();

router.get("/", resumeController.getResumes);
router.post("/", resumeController.addResume);
router.post("/:id", resumeController.deleteResume);

export default router;
