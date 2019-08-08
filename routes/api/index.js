const router = require("express").Router();
const loginRoute = require("./users");

// Routes
router.use("/users", loginRoute);

// If no api routes are hit, send React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
