const customers = [
  { id: 1, firstName: "Jack", lastName: "Jill" },
  { id: 2, firstName: "Mack", lastName: "Hill" },
  { id: 3, firstName: "Tack", lastName: "Bill" }
];

module.exports = {
  findAll: (req, res) => {
    res.json(customers);
  },
  login: (req, res) => {
    res.send("Login")
  },
  register: (req, res) => {
    res.send("Register")
  }
};
