const { Article } = require("../models");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const articles = await Article.findAll({ include: User });
  console.log(`Id del artículo es: ${req.params.articleId}`);
  res.render("../views/article", { articles });
}

// Show the form for creating a new resource
async function create(req, res) {
  console.log(req.body);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

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
