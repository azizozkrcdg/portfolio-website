import projectController from "../../controllers/admin/projectController.js";
import express from "express";

const router = express.Router();

router.get("/", projectController.getProjectsPage);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);
router.post("/update/:id", projectController.updateProject);
export default router;