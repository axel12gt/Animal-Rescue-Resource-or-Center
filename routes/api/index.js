const router = require("express").Router();
const customerRoute = require("./customerRoutes");
const loginRoute = require("./users");

// Routes
router.use("/api", loginRoute);

// If no api routes are hit, send React app
router.user((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
