import Blog from "../../models/Blog.js";
import Certificate from "../../models/Certificate.js";
import Project from "../../models/Project.js";
import Admin from "../../models/Admin.js";

const getDashboard = async (req, res) => {
  try {
    const blogs = await Blog.find();
    const projects = await Project.find();
    const certificates = await Certificate.find();
    const admins = await Admin.find();

    res.render("admin/index", {blogs, projects, certificates, admins});
  } catch (error) {
    console.error("Dashboard alınırken hata oluştu:", error);
    res.status(500).send("Dashboard alınırken hata oluştu.");
  }
};

export default {getDashboard};