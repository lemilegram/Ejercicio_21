const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const authController = require("../controllers/authController");

router.get("/homeLogged", pagesController.showHomeLogged);

router.get("/admin", pagesController.showAdmin);

router.get("/admin/new", pagesController.showNewArticle);

router.post("/admin/new", articleController.create);

router.get("/edit/:articleId", pagesController.showEditArticle);

router.post("/edit/:articleId", articleController.edit);

router.get("/delete/:articleId", articleController.destroy);

module.exports = router;
