const express = require("express");
const routes = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 3001;

// Add routes
app.use(routes);


app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
