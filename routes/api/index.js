const router = require("express").Router();
const customerRoute = require("./customerRoutes");

router.use("/api", customerRoute);

module.exports = router;
