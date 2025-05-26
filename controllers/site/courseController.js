import Course from "../../models/Course.js";

const getAllVideo = async (req, res) => {
  try {
    const videos = await Course.find();
    res.status(200).render("site/course", {videos});
  } catch (error) {
    res.status(500).send({ error: "Server Error" });
  }
};

export default {getAllVideo}