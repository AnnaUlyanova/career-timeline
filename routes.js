var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var db = require('./db.js')

module.exports = {
  getTimeline: getTimeline,
  getCV: getCV,
  getProjectPage: getProjectPage,
  getAbout: getAbout,
  getContact: getContact
}
function getTimeline (req, res) {
  db.getCareerSteps()
  .then(function(steps) {
    var data = {
      title: "Anna Ulyanova | Career Timeline",
      steps: steps
    }
    res.render('timeline', data)
  })
  .catch(function (err) {
    res.status(500).send('Error' + err.message)
  })
}

function getCV (req, res) {
  res.download('./public/CV.pdf')
}

function getProjectPage (req, res) {
  db.getProjects()
    .then(function(projects) {
    var data = {
      title: "Anna Ulyanova | Projects",
      projects: projects
    }
    res.render('projects', data)
  })
  .catch(function (err) {
    res.status(500).send('Error' + err.message)
  })
}

function getAbout (req, res) {
  var data = {
    title: "Anna Ulyanova | About"
  }
  res.render('about', data)
}

function getContact (req, res) {
  var data = {
    title: "Anna Ulyanova | Contact"
  }
  res.render('contact', data)
}
