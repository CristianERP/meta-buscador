const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  url: { type: String, required: true },
  proveedor: { type: String, required: true },
  habilidades: { type: String, required: true },
  rating: { type: Number },
  resenias: { type: String, required: true },
  images: { type: String }
})

const Course = mongoose.model("Course", courseSchema, "courses")

module.exports = Course
