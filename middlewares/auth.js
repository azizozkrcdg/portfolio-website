const isAuthenticated = (req, res, next) => {
  if (req.session.adminId) return next();
  res.redirect("/admin/login");
}

export default isAuthenticated;