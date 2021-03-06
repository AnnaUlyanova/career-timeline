var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getCareerSteps: getCareerSteps,
  getProjects: getProjects
}

function getCareerSteps() {
  return connection ('career-steps')
}

function getProjects() {
  return connection ('projects')
}
