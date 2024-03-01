require('dotenv').config()
require("./database/db")
const express = require('express')
const PORT = process.env.PORT

const employee = require("./routers/employee")

const app = express()

app.use(express.json())

app.use("/employee", employee)

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
})