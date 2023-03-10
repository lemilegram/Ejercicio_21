const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.articleId, { include: User });
  const comments = await Comment.findAll(
    { where: { articleId: req.params.articleId } },
    { include: User },
  );
  const users = await User.findAll();
  res.render("article", { article, comments, users, isAuthenticated: req.isAuthenticated() });
}

// Show the form for creating a new resource
async function create(req, res) {
  const user = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email },
  });
  await Article.create({
    title: req.body.title,
    content: req.body.content,
    userId: user[0].dataValues.id,
  });
  res.redirect("/panel/admin");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const user = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email },
  });
  await Article.update(
    { title: req.body.title, content: req.body.content, userId: user[0].dataValues.id },
    { where: { id: req.params.articleId } },
  );
  res.redirect("/panel/admin");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Article.destroy({
    where: { id: req.params.articleId },
  });
  res.redirect("/panel/admin");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
