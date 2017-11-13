var environment   = process.env.NODE_ENV || 'development'
var configuration = require('../../knexfile')[environment]
var database      = require('knex')(configuration)
pry = require('pryjs')

function all(params){
  return database.raw("SELECT * FROM resorts INNER JOIN forecasts ON resorts.id = forecasts.id")
}

module.exports = {
  all:all,
}
