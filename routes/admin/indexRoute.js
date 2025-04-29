import express from "express";
import pageRoute from "./pageRoute.js";
import aboutRoute from "./aboutRoute.js";
import projectRoute from "./projectRoute.js";
import certificateRoute from "./certificateRoute.js";
import socialMediaRoute from "./socialMediaRoute.js";
import resumeRoute from "./resumeRoute.js";
import isAuthenticated from "../../middlewares/auth.js";
import blogRoute from "./blogRoute.js";


const router = express.Router();

router.use(isAuthenticated);

router.use("/", pageRoute);
router.use("/about", aboutRoute);
router.use("/projects", projectRoute);
router.use("/certificate", certificateRoute);
router.use("/socialMedia", socialMediaRoute);
router.use("/resume", resumeRoute);
router.use("/blogs", blogRoute);

export default router;