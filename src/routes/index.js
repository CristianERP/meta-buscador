const { Router } = require('express')
const router = Router()
const { getAll, searchCourses, getCoursesByRating, coursesByCategory, coursesByDifficulty } = require('../helpers')

const platziUrl = process.env.PLATZI_URL
const udemyUrl = process.env.UDEMY_URL

router.get('/', (req, res) => res.json({ message: 'Api Working!' }))

router.get('/allCourses', async (req, res) => {
  let allCourses = []

  allCourses = [...allCourses, ...await getAll(platziUrl)]
  allCourses = [...allCourses, ...await getAll(udemyUrl)]
  //allCourses = [...allCourses, ...await getAll('http://localhost:3500/courses')]

  res.json(allCourses)
})


router.get('/searchCourses/:word', async (req, res) => {
  let allCourses = []
  const searchWord = req.params.word

  allCourses = [...allCourses, ...await searchCourses(platziUrl, searchWord)];
  allCourses = [...allCourses, ...await searchCourses(udemyUrl, searchWord)];
  // allCourses = [...allCourses, ...await searchCourses('http://localhost:3500/courses', searchWord)];


  res.json(allCourses)
})

router.get('/getCoursesByRating/:rating', async (req, res) => {
  const rating = req.params.rating
  let coursesByRating = []

  coursesByRating = [...coursesByRating, ...await getCoursesByRating(platziUrl, rating)]
  coursesByRating = [...coursesByRating, ...await getCoursesByRating(udemyUrl, rating)]
  // coursesByRating = [...coursesByRating, ...await getCoursesByRating(platziUrl, rating)]

  res.json(coursesByRating)
})

router.get('/coursesByCategory/:category', async (req, res) => {
  const category = req.params.category
  let allCourses = []

  allCourses = [...allCourses, await coursesByCategory(platziUrl, category)]
  allCourses = [...allCourses, await coursesByCategory(udemyUrl, category)]
  // allCourses = [...allCourses, await coursesByCategory(platziUrl, category)]

  res.json(allCourses)
})

router.get('/coursesByDifficulty/:difficulty', async (req, res) => {
  const difficulty = req.params.difficulty
  let allCourses = []

  allCourses = [...allCourses, ...await coursesByDifficulty(platziUrl, difficulty)]
  allCourses = [...allCourses, ...await coursesByDifficulty(udemyUrl, difficulty)]
  // allCourses = [...allCourses, ...await coursesByDifficulty(platziUrl, difficulty)]

  res.json(allCourses)
})



module.exports = router