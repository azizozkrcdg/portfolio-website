import Course from "../../models/Course.js";

const getAllVideo = async (req, res) => {
  try {
    const videos = await Course.find().sort({ createdAt: -1 });
    res.render("admin/course", { videos });
  } catch (error) {
    res.status(500).send("server error", error);
  }
};

const addVideo = async (req, res) => {
  const { title, youtube_id, description } = req.body;
  try {
    const newVideo = new Course({
      title,
      youtube_id,
      description,
    });
    await newVideo.save();
    res.redirect("/admin/course");
  } catch (error) {
    res.status(500).send("server error", error);
  }
};

export default { getAllVideo, addVideo};
