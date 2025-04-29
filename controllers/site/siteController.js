import About from "../../models/About.js";
import Certificate from "../../models/Certificate.js";
import Project from "../../models/Project.js";
import Resume from "../../models/Resume.js";
import SocialMedia from "../../models/SocialMedia.js";

const getPage = async (req, res) => {
  try {
    const about = await About.findOne();
    const certificates = await Certificate.find();
    const projects = await Project.find();
    const resumes = await Resume.find();
    const socialMedia = await SocialMedia.find();
    res.render("site/index", {about, certificates, projects, resumes, socialMedia});
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export default { getPage };
