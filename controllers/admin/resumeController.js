import Resume from "../../models/Resume.js";

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.render("admin/resume", { resumes });
  } catch (error) {
    console.log("HATA:", error);
    res.status(500).send("Server Error");
  }
};

const addResume = async (req, res) => {
  try {
    const { jobTitle, company, startedYear, endYear, description } = req.body;

    const newResume = new Resume({
      jobTitle,
      company,
      startedYear,
      endYear,
      description,
    });

    await newResume.save();

    res.status(201).redirect("/admin/resume");
  } catch (error) {
    console.log("HATA : ", error);
    res.status(500).send("Server Error");
  }
};

const deleteResume = async (req, res) => {
  try {
    const resumeId = req.params.id;
    const resume = await Resume.findByIdAndDelete(resumeId);

    if (!resume) {
    return res.send("Deneyim bulunamadı");
    }

    res.redirect("/admin/resume");
  } catch (error) {
    console.log("HATA : ", error);
    res.status(500).send("Server Error");
  }
};

export default { getResumes, addResume, deleteResume };
