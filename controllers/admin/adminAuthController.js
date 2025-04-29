import Admin from "../../models/Admin.js";

const getLoginPage = (req, res) => {
  res.render("admin/login");
};

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

export default { getLoginPage, login, createAdmin, logout };
