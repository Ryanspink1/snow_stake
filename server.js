// server.js
var express = require('express')
var app = express()

app.get('/', function(request, response) {
  response.send('It\'s a secret to everyone.')
})

// set the port for Express to run on
app.listen(3000)
