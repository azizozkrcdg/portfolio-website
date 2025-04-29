import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    unique: true
  },
  projectUrl: String,
  projectDescription: String,

}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;