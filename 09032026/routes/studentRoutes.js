const express = require('express')
const router = express.Router()

const studentsController = require('../controllers/studentController')

// GET all students
router.get('/students', studentsController.getAllStudents)

// GET student by id
router.get('/students/:id', studentsController.getStudentById)

// POST student
router.post('/students', studentsController.createStudent)

// PUT student
router.put('/students/:id', studentsController.updateStudent)

// DELETE student
router.delete('/students/:id', studentsController.deleteStudent)

module.exports = router