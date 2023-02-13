const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

router.get("/admin", pagesController.showAdmin);

router.get("/admin/new", pagesController.showNewArticle);

router.post("/admin/new", articleController.create);

router.get("/edit/:articleId", pagesController.showEditArticle);

router.post("/edit/:articleId", articleController.edit);

module.exports = router;
