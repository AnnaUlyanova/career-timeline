var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

var db = require('./db.js')

module.exports = {
  getTimeline: getTimeline,
  getCV: getCV
}
function getTimeline (req, res) {
  db.getCareerSteps()
  .then(function(steps) {
    var data = {
      title: "Anna Ulyanova | Career Timeline",
      active: true,
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
