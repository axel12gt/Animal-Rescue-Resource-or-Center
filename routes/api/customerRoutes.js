const router = require("express").Router();
const customersController = require("../../controllers/customersController");


router.route("/customers")
  .get(customersController.findAll);





module.exports = router;
