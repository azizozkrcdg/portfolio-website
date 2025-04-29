import About from "../../models/About.js";

const getAboutText = async (req, res) => {
  try {
    const about = await About.findOne();

    if(!about) {
        return res.send("About yazısı bulunamadı");
    }

    res.render("admin/about", { about });
  } catch (error) {
    res.status(500).send("Server Error!");
  }
};

const addAboutText = async (req, res) => {
  try {
    const { aboutText } = req.body;
    const newAbout = new About({
      aboutText,
    });

    await newAbout.save();
    res.redirect("/admin/about");
  } catch (error) {
    res.status(500).send("Server Error!");
  }
};

export default {getAboutText, addAboutText };
