const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");

async function createComment(req, res) {
  await Comment.createComment({
    where: { articleId: req.params.articleId },
  });
  console.log("Pirulo");
  res.redirect("/article/:articleId");
}

module.exports = {
  createComment,
};
