import dashboardController from "../../controllers/admin/dashboardController.js";
import express from 'express';

const router = express.Router();

router.get("/", dashboardController.getDashboard);

export default router;