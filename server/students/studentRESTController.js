const { Router } = require('express')
const bodyParser = require('body-parser')
const { getStudentById, searchStudents, searchStudentsBySubscriptionType, createStudent } = require('./studentDataAccess')

const jsonParser = bodyParser.json()

exports.studentsRoutes = Router()
  .get('/students/:id', async (req, res) => {
    const student = await getStudentById(req.params.id)
    res.send(student)
  })
  .get('/students', async (req, res) => {
    let students = null
    if (req.query.keyword) {
      students = await searchStudents(req.query.keyword)
    } else if (req.query.subscriptionType) {
      students = await searchStudentsBySubscriptionType(req.query.subscriptionType)
    }
    if (!students) return res.status(404).end()
    res.send(students)
  })
  .post('/students', jsonParser, async (req, res) => {
    try {
      createStudent(req.body)
      res.status(201).end()
    } catch (error) {
      res.status(500).send({
        message: error.message,
        stacktrace: error.stacktrace
      })
    }
  })
