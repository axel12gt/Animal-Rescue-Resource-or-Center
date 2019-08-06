// when you invoke express as a dependency, you have to immediately call app = express() otherwise express doesnt run properly
const express = require("express");
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

// Bodyparser
// this has to be before you process your routes, otherwise your route cant process the json
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Add routes
app.use(routes);

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/animalRescue")
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));



app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
