import SocialMedia from "../../models/SocialMedia.js";

const getSocialMediaPage = async (req, res) => {
  try {
    const socialMedias = await SocialMedia.find();
    res.status(200).render("admin/socialMedia", { socialMedias });
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

const addSocialMedia = async (req, res) => {
  try {
    const { platform, username, url } = req.body;

    const newSocialMedia = new SocialMedia({
      platform,
      username,
      url,
    });

    await newSocialMedia.save();
    res.redirect("/admin/socialMedia");
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

const deleteSocialMedia = async (req, res) => {
  try {
    const socialMediaId = req.params.id;
    const socialMedia = await SocialMedia.findByIdAndDelete(socialMediaId);

    if (!socialMedia) {
      return res.send("Sosyal medya bulunamadı!");
    }

    res.redirect("/admin/socialMedia");
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

export default { getSocialMediaPage, addSocialMedia, deleteSocialMedia };
