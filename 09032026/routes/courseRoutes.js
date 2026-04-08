const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courseController')

router.get('/courses',courseController.getCourses)

router.post('/courses',courseController.createCourse)

module.exports = router