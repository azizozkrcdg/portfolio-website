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

const deleteVideo = async (req, res) => {
  try {
    const video_id = req.params.id;
    const deletedVideo = await Course.findByIdAndDelete(video_id);
    if (!deletedVideo) {
       return res.status(404).send({ error: "Böyle bir video bulunamadı!" });
    }
    res.status(200).redirect("/admin/course");
  } catch (error) {
    res.status(500).send("server error", error);
  }
};

export default { getAllVideo, addVideo, deleteVideo };
