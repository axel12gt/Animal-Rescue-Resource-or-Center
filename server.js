const express = require("express")

const app = express()

const port = 3001

app.get("/api/customers", (req,res) => {
    const customers =[
        {id: 1, firstName: "Jack", lastName: "Jill"},
        {id: 2, firstName: "Mack", lastName: "Hill"},
        {id: 3, firstName: "Tack", lastName: "Bill"}
        ]

        res.json(customers)
})

app.listen(port, () => console.log(`server started on https://localhost:${port}`))