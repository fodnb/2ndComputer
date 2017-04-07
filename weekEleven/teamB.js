
function player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = Math.floor((Math.random() * 10) + 1);
    this.defense = Math.floor((Math.random() * 10) + 1);
    this.goodgame = function() {
        var coinflip = Math.floor((Math.random() * 2) + 1);
        if (coinflip === 1) {
            this.offense = this.offense + 1;
        } else if (coinflip === 2) {
            this.defense = this.defense + 1;
        }
    };
    this.badgame = function() {
        var coinflip = Math.floor((Math.random() * 2) + 1);
        if (coinflip === 1) {
            this.offense = this.offense - 1;
        } else if (coinflip === 2) {
            this.defense = this.defense - 1;
        }


    };
    this.printstats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense" + this.defense);
    };
}

var inquirer = require('inquirer');
var score = 0;
var count = 0;
var players = [];
var starters = [];
var subs = [];
var askQuestions = function() {
    if (count < 5) {
        inquirer.prompt([{
                name: "name",
                message: "Players Name: "

            }, {
                name: "position",
                message: "what is the players position?"
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
            var newPlayer = new player(
                a.name,
                a.position,
                this.offense,
                this.defense

            );

            if (count < 8) {
                players.push(newPlayer);
                starters.push(newPlayer);

            } else {
                players.push(newPlayer);
                subs.push(newPlayer);
            }


            count++;
            askQuestions();

        });
    } else {
        for (var x = 0; x < players.length; x++) {
            players[x].printstats();
        }
        playGame();
    }
    
}






var playGame = function() {


	// console.log("P" + JSON.stringify(players));
 //            console.log("-----------------------------------------------------------");
 //            console.log("subs" + JSON.stringify(subs));
 //            console.log("-----------------------------------------------------------");

 //            console.log("starters" + JSON.stringify(starters));

    // console.log(score);
    var defensiveStat = 0;
    var offensiveStat = 0;
    
    // console.log('a');
     	for(var i = 0; i < 10; i++){
        var numOne = Math.floor((Math.random() * 50) + 1);
        var numTwo = Math.floor((Math.random() * 50) + 1);
        for (var i = 0; i < starters.length; i++) {
            offensiveStat = offensiveStat + starters[i].offense;
            defensiveStat = defensiveStat + starters[i].defense;
        }
        // console.log("stato " + offensiveStat);
        // console.log('statd '+ defensiveStat);



        if (numOne < offensiveStat) {
            score++;
        }

        if (numTwo < defensiveStat) {
            score--;
        }
        console.log("score/: " + score);
    }

    	if(score > 0){
        for (var i = 0; i > starters.length; i++) {
            console.log(score);
            players[i].goodgame();
            players[i].printstats();
        }
    }else{
    	     for (var i = 0; i > starters.length; i++) {
            players[i].badgame();
            players[i].printstats();
           
        }
    	
    }

}




askQuestions();