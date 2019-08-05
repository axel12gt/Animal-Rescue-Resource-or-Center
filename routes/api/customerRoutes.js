const router = require("express").Router();
const customersController = require("../../controllers/customersController");

// Matches with "/api/books"
router.route("/customers")
  .get(customersController.findAll);



module.exports = router;
