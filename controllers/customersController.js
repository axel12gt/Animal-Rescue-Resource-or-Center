module.exports = {
  create: (req, res) => {
    const customers = [
      { id: 1, firstName: "Jack", lastName: "Jill" },
      { id: 2, firstName: "Mack", lastName: "Hill" },
      { id: 3, firstName: "Tack", lastName: "Bill" }
    ];

    res.json(customers);
  }
};
