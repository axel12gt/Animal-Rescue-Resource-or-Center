// when you invoke express as a dependency, you have to immediately call app = express() otherwise express doesnt run properly
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passpwer");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const routes = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(flash());

// static assets for heroku
if (process.env.NODE_ENV === "production") {
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, "../build")));
}

// Routes
app.use(routes);

// Express 404
app.use((req, res, next) => {
  let err = new Error("404 in Server.js, route not found");
  err.status = 404;
  next(err);
});

// Server-Side Authentication
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/animalRescue")
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

/* Error Handling */
// Dev Error Handling
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// Prod Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    eroor: {}
  });
});

// Express listener
app.listen(PORT, () =>
  console.log(`server started on ${PORT}`)
);
