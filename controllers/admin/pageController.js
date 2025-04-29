import Certificate from "../../models/Certificate.js"

const getHomePage = async (req, res) => {
  res.status(200).render("admin/index"),
    {
      pageName: "dashboard",
    };
};

const getAboutPage = async (req, res) => {
  res.status(200).render("admin/about"),
    {
      pageName: "about",
    };
};

const getCertificatePage = async (req, res) => {
  try {
    const certificates = await Certificate.find();

    res.status(200).render("admin/certificate", {certificates});
   
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const getProjectsPage = async (req, res) => {
  res.status(200).render("admin/projects"),
    {
      pageName: "projects",
    };
};

// const getResumePage = async (req, res) => {
//   res.status(200).render("admin/resume"),
//     {
//       pageName: "resume",
//     };
// };

const getSocialMediaPage = async (req, res) => {
  res.status(200).render("admin/social-media"),
    {
      pageName: "social-media",
    };
};

export default { getHomePage, getAboutPage, getCertificatePage, getProjectsPage, getSocialMediaPage };
