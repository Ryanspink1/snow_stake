var environment   = process.env.NODE_ENV || 'development'
var configuration = require('../../knexfile')[environment]
var database      = require('knex')(configuration)
pry = require('pryjs')

function all(params){
  return database.raw("SELECT * FROM resorts")
}

module.exports = {
  all:all,
}
