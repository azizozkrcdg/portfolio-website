import Admin from "../../models/Admin.js";

// admin giriş sayfası
const getLoginPage = (req, res) => {
  res.render("admin/login");
};

// admin giriş işlemi
const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (!admin || !(await admin.comparePassword(password))) {
    return res.render("admin/login", {
      error: "Kullanıcı adı veya şifre hatalı",
    });
  }

  req.session.adminId = admin._id;
  res.redirect("/admin/");
};

// admin oluşturma işlemi
const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    return res.status(400).json("Kullanıcı adı zaten var");
  }

  const newAdmin = new Admin({ username, password });
  await newAdmin.save();
  res.status(201).json({ message: "Admin oluşturuldu" });
};

// admin çıkış işlemi
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Oturum sonlandırılamadı:", err);
      return res.status(500).send("Çıkış işlemi sırasında bir hata oluştu");
    }
    res.clearCookie("connect.sid");
    return res.redirect("/admin/login");
  });
};

// admin silme işlemi
const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findByIdAndDelete(adminId);
    if (!admin) {
      return res.status(404).send("Admin bulunamadı");
    }
    res.status(200).redirect("/admin");
  } catch (error) {
    console.error("Admin silme hatası:", error);
    res.status(500).send("Admin silme işlemi sırasında bir hata oluştu");
  }
};

const adminPasswordReset = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).send("Admin bulunamadı");
    }
    admin.password = password;
    await admin.save();
    res.status(200).render("admin/index", {admin})
  } catch (error) {
    console.error("Admin şifre sıfırlama hatası:", error);
    res
      .status(500)
      .send("Admin şifre sıfırlama işlemi sırasında bir hata oluştu");
  }
};
export default { getLoginPage, login, createAdmin, logout, deleteAdmin, adminPasswordReset };
