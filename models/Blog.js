import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
        type: String,
    },
    content: {
      type: String,
      required: true,
    },
    reads: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
