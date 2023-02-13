const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");

async function createComment(req, res) {
  const newComment = await Comment.create({
    articleId: req.params.articleId,
    content: req.body.comment,
  });

  res.redirect(`/article/${req.params.articleId}`);
}

// async function create(req, res) {
//   const user = await User.findOrCreate({
//     where: { email: req.body.email },
//     defaults: { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email },
//   });
//   await Article.create({
//     title: req.body.title,
//     content: req.body.content,
//     userId: user[0].dataValues.id,
//   });
//   res.redirect("/panel/admin");
// }

module.exports = {
  createComment,
};
