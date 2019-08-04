const router = require("express").Router();
const booksController = require("../../controllers/customersController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create);



module.exports = router;
