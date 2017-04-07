var inquirer = require("inquirer");
var options = ["spotify-this-song", "movie-this", "twitter", "do-what-it-says"];

inquirer.prompt([{
                name: "name",
                message: "Players Name: "

            }, 
            {
                name: "type",
                type: "rawlist",
                message: "choose one!",
                choices: options

            },
            {
                name: "search",
                message: 'What would you like to search for?'
}
            // {
            // 	name: "offense",
            // 	message: "offense#"
            // },
            // {
            // 	name: "defense",
            // 	message: "defense#"

            // }
            // },
            // {
            // 	name: "offense",
            // 	message: "players o ability"
            // 	validate: 
            // }
        ]).then(function(a) {

            var newB = a.type;
            console.log(newB);
            console.log(a.search);
            // console.log(newB[0] + newB[1]);


                           });
