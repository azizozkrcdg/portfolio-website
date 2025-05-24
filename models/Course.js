import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    youtube_id: {
      type: String,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;