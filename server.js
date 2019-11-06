const express = require('express')
const Bundler = require('parcel-bundler')
const { studentsRoutes } = require('./server/students/studentRESTController')

const app = express()

app
  // student REST API Routes
  .use(studentsRoutes)
  // web routes
  .use(new Bundler('./server/web/index.html').middleware())

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))