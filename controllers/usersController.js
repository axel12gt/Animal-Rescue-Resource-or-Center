const Users = require("../models/Users");
const passport = require("passport");

module.exports = {
  getUser: (req, res, next) => {
    if (req.user)
      return res.status(200).json({
        user: req.user,
        authenticated: true
      });
    else
      return res.status(401).json({
        error: "User is not authenticated",
        authenticated: false
      });
  },
  register: (req, res, next) => {
    console.log("/register handler", req.body);
    Users.register(
      new Users({ username: req.body.username }),
      req.body.password,
      (err, account) => {
        if (err) return res.status(500).send({ error: err.message });

        passport.authenticate("local")(req, res, () => {
          req.session.save(err => {
            if (err) return next(err);

            res.status(200).send("OK");
          });
        });
      }
    );
  },
  login: (req, res, next) => {
    console.log("/login handler");
    req.session.save(err => {
      if (err) return next(err);

      res.status(200).send("OK");
    });
  },
  logout: (req, res, next) => {
    req.logout()
    req.session.save((err => {
      if (err) return next(err)

      res.status(200).send("OK")
    }))
  },
  test: (req, res, next) => {
    console.log(`Ping Dinger ${req.statusCode}`)

    res.status(200).send("Dong!")
  }
};
