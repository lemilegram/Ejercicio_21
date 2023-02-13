const { Article } = require("../models");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const articles = await Article.findAll({ include: User });
  const showArticle = articles[req.params.articleId - 1];
  res.render("../views/article", { showArticle });
}

// Show the form for creating a new resource
async function create(req, res) {
  console.log(req.body);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  await Article.update({ title: req.body.title }, { where: req.params.articleId });
  console.log("aaaa");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
