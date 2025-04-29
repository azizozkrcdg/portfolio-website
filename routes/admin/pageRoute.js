import express from "express"
import pageController from "../../controllers/admin/pageController.js";


const router = express.Router();

router.route("/").get(pageController.getHomePage);



export default router;