const isAuthenticated = (req, res, next) => {
  const isLoggedIn = req.session && req.session.adminId;

  if (isLoggedIn) {
    return next();
  }

  // İsteğe bağlı olarak geri dönüş URL'si eklenebilir
  req.session.redirectTo = req.originalUrl;

  return res.redirect("/admin/auth/login");
};

export default isAuthenticated;
