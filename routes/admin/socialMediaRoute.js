import socialMediaController from "../../controllers/admin/socialMediaController.js";
import express from "express";

const router = express.Router();

router.get("/", socialMediaController.getSocialMediaPage);
router.post("/", socialMediaController.addSocialMedia);
router.post("/:id", socialMediaController.deleteSocialMedia);

export default router;
