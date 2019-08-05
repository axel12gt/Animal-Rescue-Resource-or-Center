const router = require("express").Router();
const customerRoute = require("./customerRoutes");
const loginRoute = require("./users");


router.use("/api", customerRoute);
router.use("/users", loginRoute);


module.exports = router;
