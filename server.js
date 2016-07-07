var express = require('express');
var app = express();
var path = require('path');

var module3 = require('./modules/module3.js');


app.get('/balance', function(request, response){
  response.send(module3.finalOutput());
})


app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Hey There Console.');
})
