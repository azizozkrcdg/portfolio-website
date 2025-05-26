import siteController from "../../controllers/site/siteController.js";
import siteBlogController from "../../controllers/site/siteBlogController.js";
import courseController from "../../controllers/site/courseController.js";
import express from "express";

const router = express.Router();

// site routes
router.get("/", siteController.getPage);
router.get("/blogs", siteBlogController.getAllBlogs);
router.get("/blogs/:id", siteBlogController.getBlogById);
router.get("/course", courseController.getAllVideo);

export default router;