import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  aboutText: String,
});

const About = mongoose.model("About", AboutSchema);

export default About