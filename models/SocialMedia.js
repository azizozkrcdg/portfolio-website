import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema({
  platform: String,
  username: String,
  url: String
}, {timestamps: true});

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

export default SocialMedia;