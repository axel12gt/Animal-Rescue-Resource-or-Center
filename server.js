const express = require("express");
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

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
