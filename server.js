var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./index')
var routes = require('./routes')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}))

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/', routes.getTimeline)
server.get('/projects', routes.getProjectPage)
server.get('/downloadCV', routes.getCV)
server.get('/about', routes.getAbout)
server.get('/contact', routes.getContact)
