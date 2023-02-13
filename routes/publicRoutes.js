const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/home", pagesController.showHome);

router.get("/article/:articleId", articleController.show);

router.post("/article/:articleId", commentController.createComment);

module.exports = router;
