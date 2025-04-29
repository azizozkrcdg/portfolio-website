import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  jobTitle: String,
  company: String,
  startedYear: String,
  endYear: String,
  description: String,
});

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;