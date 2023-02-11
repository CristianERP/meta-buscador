const axios = require('axios')

const getAll = async (url) => {
  try {
    const responseCourses = await axios.get(url)
    return responseCourses.data
  } catch (error) {
    console.error(error)
    return []
  }
}

const searchCourses = async (url, searchWord) => {
  try {
    const responseCourses = await axios.get(url)
    return responseCourses.data.filter(course => {
      return course.titulo.toLowerCase().includes(searchWord) || course.habilidades.toLowerCase().includes(searchWord)
    })
  } catch (error) {
    console.error(error)
    return []
  }
}

const getCoursesByRating = async (url, rating) => {
  try {
    const responseCourses = await axios.get(url)
    return responseCourses.data.filter(course => course.rating >= rating)
  } catch (error) {
    console.error(error)
    return []
  }
}

const coursesByCategory = async (url, category) => {
  try {
    const responseCourses = await axios.get(url)
    const courses = responseCourses.data
    return courses.filter(course => course.category === category)
  } catch (error) {
    console.error(error)
    return []
  }
}

const coursesByDifficulty = async (url, difficulty) => {
  try {
    const responseCourses = await axios.get(url)
    const courses = responseCourses.data
    return courses.filter(course => course.difficulty === difficulty)
  } catch (error) {
    console.error(error)
    return []
  }
}

module.exports = { getAll, searchCourses, getCoursesByRating, coursesByCategory, coursesByDifficulty }