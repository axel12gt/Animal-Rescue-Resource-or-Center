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
    res.send("Login");
  },
  register: (req, res) => {
    console.log(req.body);
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //check required fields
    if (!name || !email || !password || !password2)
      errors.push({ msg: "Please fill in all fields" });

    // check passwords
    if (password !== password2)
     errors.push({ msg: "Passwords do not match" });

    //checks for capital letter
    const capCheck = password.search(/([A-Z])\w+/g);
    //checks for lowercase letter
    const lowCheck = password.search(/([a-z])\w+/g);
    //checks if password is >= 8 letters
    if (password.length >= 8) {
      //checks if there is a capital letter and a lowercase letter
      if (capCheck != -1 && lowCheck != -1) {
        console.log("Your password is valid");
      } else errors.push("Please include a capital and a lower case");
    } else errors.push("Password needs to contain 8 or more letters");

    if(errors.length > 0){
      res.render("register", {
        errors,
        name,
        email,
        password,
        password2,
      })
    } else {
      res.send("Pass")
    }
  }
};
