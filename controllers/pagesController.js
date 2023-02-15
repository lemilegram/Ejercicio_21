const { Article, User } = require("../models");
const isAuthenticated = require("../middlewares/isAuthenticated");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User });

  res.render("home", {
    articles,
    isAuthenticated: req.isAuthenticated(),
  });
}

async function showAdmin(req, res) {
  const author = req.user;
  console.log(author.id);
  const articles = await Article.findAll({
    include: {
      model: User,
      where: {
        id: req.user.id,
      },
    },
  });
  res.render("admin", { articles, author });
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

  showAdmin,
  showNewArticle,
  showEditArticle,
  showAboutUs,
};
