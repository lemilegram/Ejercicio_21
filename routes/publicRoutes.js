const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/home", pagesController.showHome);

module.exports = router;
