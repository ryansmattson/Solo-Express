module.exports = {
  randomNumberGen : randomNumberGen
}

function randomNumberGen(min, max){
	var number = Math.floor(Math.random() * (1 + max - min) + min);
	return number;
}
