const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  res.render("register");
}

async function login(req, res) {
  res.render("login");
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const registerFirstname = req.body.firstname;
  const registerLastname = req.body.lastname;
  const registerEmail = req.body.email;
  const registerPassword = req.body.password;

  await User.create({
    firstname: registerFirstname,
    lastname: registerLastname,
    email: registerEmail,
    password: registerPassword,
  });

  return res.redirect("/home");
}

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
  login,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};