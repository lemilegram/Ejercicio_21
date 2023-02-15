const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const authController = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/register", authController.index);

router.post("/register", authController.store);

router.get("/login", authController.loginIndex);

router.post("/login", authController.loginAuth);

router.get("/home", pagesController.showHome);

router.get("/article/:articleId", articleController.show);

router.post("/article/:articleId", commentController.createComment);

module.exports = router;
