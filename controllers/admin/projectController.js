import { response } from "express";
import Project from "../../models/Project.js";

//proje sayfası
const getProjectsPage = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).render("admin/projects", { projects });
  } catch (error) {
    res.status(500).send({ error: "Server error!" });
  }
};

// proje oluştur
const createProject = async (req, res) => {
  try {
    const { projectName, projectUrl, projectDescription } = req.body;

    const existingProject = await Project.findOne({ projectName });

    if (existingProject) {
      return res.status(400).send("Bu isimde bi proje zaten var!");
    }

    const newProject = new Project({
      projectName,
      projectUrl,
      projectDescription,
    });

    await newProject.save();
    res.redirect("/admin/projects");
  } catch (error) {
    console.log("HATA: ", error);
    res.status(500).send({ error: "Server error!" });
  }
};

const deleteProject = async (req, res) => {
 try {
  const project_id = req.params.id;
  const project = await Project.findOneAndDelete(project_id);
  if (!project) {
     res.status(500).send({
      error: "Böyle Bir Proje Bulunamadı ",
    });
  }
  res.status(200).redirect("/admin/projects");
 } catch (error) {
  res.status(500).send("Server error")
 }
};

export default { getProjectsPage, createProject, deleteProject};
