import express from 'express';
import blogController from '../../controllers/admin/blogController.js';

const router = express.Router();

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/create", blogController.createBlog);
router.post("/:id", blogController.deleteBlog);
router.post("/:id", blogController.editBlog);


export default router;