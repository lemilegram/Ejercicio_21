/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article } = require("../models");
const { User } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("../views/home", { articles });
}

async function showHomeLogged(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("../views/homeLogged", { articles });
}

async function showAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("../views/admin", { articles });
}

async function showNewArticle(req, res) {
  const articles = await Article.findAll();
  res.render("../views/newArticle", { articles });
}

async function showEditArticle(req, res) {
  const article = await Article.findByPk(req.params.articleId, { include: User });
  res.render("../views/editArticle", { article });
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showHomeLogged,
  showAdmin,
  showNewArticle,
  showEditArticle,
  showAboutUs,
};
