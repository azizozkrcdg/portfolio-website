import courseController from "../../controllers/admin/courseController.js";
import express from "express";

const router = express.Router();

router.get("/", courseController.getAllVideo);
router.get("/add", (req, res) => {
    res.render("admin/add-video");
});
router.post("/add", courseController.addVideo);
router.delete("/:id", courseController.deleteVideo);


export default router;