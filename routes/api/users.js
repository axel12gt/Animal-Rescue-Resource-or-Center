const router = require("express").Router();
const customersController = require("../../controllers/customersController");

router.route("/login").get(customersController.login);
// router.route("/register").get(customersController.register);
router.route("/register").post((req, res, next) => {
    console.log('bruh')
    console.log(req)
})
// Regiser Handle
// router.post("/register", (req, res) => {
//     console.log(req)
//     res.send("test")
// })

module.exports = router;
