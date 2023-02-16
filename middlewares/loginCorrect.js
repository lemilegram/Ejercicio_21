const { User } = require("../models");
const bcrypt = require("bcrypt");

const loginCorrect = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    req.flash("error", "Invalid credentials!");
    return res.redirect("/login");
  }

  const correctPassword = await bcrypt.compare(req.body.password, user.password);
  if (!correctPassword) {
    req.flash("error", "Invalid credentials!");
    return res.redirect("/login");
  } else {
    next();
  }
};

module.exports = loginCorrect;
