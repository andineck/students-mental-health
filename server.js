const express = require('express')
const Bundler = require('parcel-bundler')
const { studentsRoutes } = require('./server/students/studentRESTController')

const app = express()

app
  // student REST API Routes
  .use(studentsRoutes)
  // web routes
  .use(new Bundler('./server/web/index.html').middleware())


app.listen(8080 || process.env.PORT)