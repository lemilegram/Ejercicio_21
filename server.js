require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");
const bcrypt = require("bcrypt");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
  }),
);

app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, cb) => {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          console.log("Nombre de usuario no existe.");
          return cb(null, false, { message: "Credenciales incorrectas." });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          console.log("La contraseña es inválida.");
          return cb(null, false, { message: "Credenciales incorrectas." });
        }
        console.log("Credenciales verificadas correctamente");
        return cb(null, user);
      } catch (error) {
        cb(error);
      }
    },
  ),
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findByPk(id);
    cb(null, user);
    // Usuario queda disponible en req.user.
  } catch (err) {
    cb(err);
  }
});

routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
