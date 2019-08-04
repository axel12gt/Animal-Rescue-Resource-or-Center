const express = require("express")
const routes = require("./routes/api");

const app = express()


const PORT = process.env.PORT || 3001

// Add routes
app.use(routes)

// app.get("/api/customers", (req,res) => {
//     const customers =[
//         {id: 1, firstName: "Jack", lastName: "Jill"},
//         {id: 2, firstName: "Mack", lastName: "Hill"},
//         {id: 3, firstName: "Tack", lastName: "Bill"}
//         ]

//         res.json(customers)
// })

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`))