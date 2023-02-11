require("dotenv").config()
const express = require("express")
const Course = require("./models/course")
const app = express()
const port = process.env.PORT || 3000

// Conecction db
require("./server")

app.get("/", async (req, res) => {
  res.json([])
})


app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Ha ocurrido un error al obtener los cursos." })
  }
})

// app.get('/cursos', (req, res) => {

// });


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})