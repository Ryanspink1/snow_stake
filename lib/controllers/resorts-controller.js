var Resorts = require('../models/resort')
pry = require('pryjs')

function index (request, response){
  Resorts.all()
  .then(function(data){
    let resorts = data.rows
    if(!resorts) {
      response.sendStatus(404)
    }else{
      response.json(resorts)
    };
  });
}

module.exports = {
  index:index,
}
