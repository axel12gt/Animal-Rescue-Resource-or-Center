const router = require("express").Router();
const passport = require("passport");
const usersController = require("../../controllers/usersController");

// Matchers with "/users/users"
router.route("/").get(usersController.getUser);

// Authentication Routes
router.route("/register").post(usersController.register);

router
  .route("/login")
  .post(
    passport.authenticate("local", { failureRedirect: "./>error=LoginError" }),
    usersController.login
  );

router.route("/logut")
    .get(usersController.logout)

// Matches with "/api/users/:id"
router.route("/users/:id")
module.exports = router;
