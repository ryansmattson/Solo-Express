module.exports = {
  firstAndSecondModule : firstAndSecondModule,
  finalOutput : finalOutput
}

var module1 = require('./module1.js');
var module2 = require('./module2.js');


function firstAndSecondModule (){
  var newRandomNumber = module1.randomNumberGen(100, 1000000);
  var numberToCurrency = module2.convertToCurrency(newRandomNumber);
  return numberToCurrency;
}

function finalOutput (){
return firstAndSecondModule();
}
