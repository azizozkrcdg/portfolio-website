import projectController from "../../controllers/admin/projectController.js";
import express from "express";

const router = express.Router();

router.route("/").get(projectController.getProjectsPage);
router.route("/").post(projectController.createProject);
router.route("/:id").post(projectController.deleteProject);
export default router;