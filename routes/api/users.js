const router = require("express").Router();
const customersController = require("../../controllers/customersController");

router.route("/login").get(customersController.login);

router.route("/register").get(customersController.register);

module.exports = router;
