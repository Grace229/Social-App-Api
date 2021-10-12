const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routers = require('./routes/post/index')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
routers(app)
app.use(logger('dev'))
module.exports = app