
const express = require('express');

require("dotenv").config()

const app = express()

const courseRoute = require("./routes/index")

app.use("/api/courses", courseRoute)


module.exports = app
