var mysql = require("mysql");

var connection = mysql.createConnection({


host:"localhost",
port: 3306,
user: "root",
password: "Buddy#135",
database: "music_db"

});



connection.connect(function(err){

	if(err) throw err;
	console.log("connected as ID " + connection.threadId);


});

// var queryS = process.argv[2];

// connection.query("select * from " + queryS, function(err, results){

// 	if(err) throw err;
// 	console.log(results);
// 	// console.log(results[0].artist);// GETS ME NONPOINT!

// 	// for(var i = 0; i < results.length; i++){
// 	// 	console.log(results[i].title);

// 	// }(



// 	for(var i = 0; i < results.length; i++){
// 		if(results[i].genre === "METAL"){
// 			console.log(results[i].title);
// 		}

// }

// })

// var type = process.argv[3];
// connection.query("select * from playlist where genre=?", [type]	, function(err, results){
// if(err) throw err;

// for(var i = 0; i < results.length; i++){
// 	console.log(results[i].artist + "  |  " + results[i].title + " 	 |  " + results[i].genre); 

// }

// })

// create

connection.query("INSERT INTO playlist SET ?", {

title: "GOOD RIDDANCE",
artist: "GREEN DAY",
genre: "PUNK"

}, function(err, response){});


//UPDATE
connection.query("UPDATE playlist SET ? WHERE ?", [{
	artist: "METALLICA"},
	{
	title: "MARCH TO WAR"
}], function(err, response){});



//delete

connection.query("DELETE FROM playlist WHERE ?", {
artist: "SMASHING PUMPKINS"
}, function(err, response){});



//read
connection.query("select * from playlist", function(err,response){
if(err) throw err;

console.log(response);

})



connection.end(function(err) {
});




