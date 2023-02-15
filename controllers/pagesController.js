const { Article, User } = require("../models");
const isAuthenticated = require("../middlewares/isAuthenticated");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User });

  res.render("home", {
    articles,
    isAuthenticated: req.isAuthenticated(),
  });
}

async function showHomeLogged(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("homeLogged");
}

async function showAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles });
}

async function showNewArticle(req, res) {
  const articles = await Article.findAll();
  res.render("../views/newArticle", { articles });
}

async function showEditArticle(req, res) {
  const article = await Article.findByPk(req.params.articleId, { include: User });
  res.render("../views/editArticle", { article });
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showHomeLogged,
  showAdmin,
  showNewArticle,
  showEditArticle,
  showAboutUs,
};
