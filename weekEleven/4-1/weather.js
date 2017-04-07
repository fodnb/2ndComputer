var weather = require('weather-js');


var userSearch =  function(name, location){
	this.name = name;
	this.location = location;
	this.date = Date.now();
	this.getWeather = function(){
		weather.find({search: local, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
  console.log("----------------------------");
  console.log(result[0].location.name);
  console.log(result[0].current.date);
  console.log("----------------------------");
});
	}


}

module.exports = userSearch;