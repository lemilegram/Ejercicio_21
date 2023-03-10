const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/logout", isAuthenticated, authController.logout);

router.get("/admin", isAuthenticated, pagesController.showAdmin);

router.get("/admin/new", isAuthenticated, pagesController.showNewArticle);

router.post("/admin/new", isAuthenticated, articleController.create);

router.get("/edit/:articleId", isAuthenticated, pagesController.showEditArticle);

router.post("/edit/:articleId", isAuthenticated, articleController.edit);

router.get("/delete/:articleId", isAuthenticated, articleController.destroy);

module.exports = router;
