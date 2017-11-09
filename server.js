var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var md5 = require('md5')

var ResortsController = require('./lib/controllers/resorts-controller')

var environment   = process.env.NODE_ENV || 'development'
var configuration = require('./knexfile')[environment];
var database      = require('knex')(configuration);
const cors = require('cors');

app.use(cors({origin: '*'}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Snow Stake'

app.get('/api/v1/resorts', ResortsController.index);

if(!module.parent){
  app.listen(app.get('port'), () => {
    console.log((app.locals.title) + ' is running on ' + (app.get('port')))
  });
};

module.exports = app;
