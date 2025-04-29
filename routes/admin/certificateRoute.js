import certificateController from "../../controllers/admin/certificateController.js";
import upload from "../../middlewares/multer.js";
import express from "express";

const router = express.Router();

// Sertifikaları listele
router.get("/", certificateController.getCertificates);

// Sertifika ekle
router.post("/", upload.single("certificateImage"), certificateController.createCertificate);

// Sertifika sil
router.delete("/:id", certificateController.deleteCertificate);

export default router;
