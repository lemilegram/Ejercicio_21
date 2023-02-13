const { Article } = require("../models");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  // const articles = await Article.findAll({ include: User });
  const article = await Article.findByPk(req.params.articleId, { include: User });
  res.render("article", { article });
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
  await Article.update(
    { title: req.body.title, content: req.body.content },
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
