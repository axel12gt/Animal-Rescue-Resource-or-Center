const mongoose = require("mongoose");
const passportLocalMonggose = require("passport-local-mongoose");

const Users = new mongoose.Schema({
  name: {
    type: String,
    required: True
  },
  email: {
    type: String,
    required: True
  },
  password: {
    type: String,
    required: True
  },
  date: {
    type: Date,
    default: Date.now
  }
});

Account.plugin(passportLocalMonggose);

module.exports = Users;
