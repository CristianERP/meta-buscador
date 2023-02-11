require("dotenv").config()
const express = require("express")
const connection = require('./server')

const app = express()
const port = process.env.PORT || 3000


app.get("/", async (req, res) => {
  res.json([])
})


app.get("/courses", async (req, res) => {
  connection.query('SELECT * FROM courses', (err, courses) => {
    if (err) throw err;
    res.json(courses);
  });
})

// app.get('/cursos', (req, res) => {

// });


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})