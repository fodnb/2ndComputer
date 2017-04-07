function Charachter(name, profession, gender, age, strength, hitpoints, printstats){

	this.name = name,
	this.profession = profession,
	this.gender = gender,
	this.age = age,
	this.strength = strength,
	this.hitpoints = hitpoints,
	this.printstats = function(){
		console.log("Name: " + this.name + "\nProfession: "  + this.profession + "\nGender: " + this.gender  + "\nAge: " + this.age  + "\nStrength: " + this.strength + "\nHitPoints: " + this.hitpoints + "\n");
	}
	this.IsAlive = function(charachter){
		if(this.hitpoints > 0){
			console.log(this.name + " is still alive");
		}
	},
	this.Attack = function(charachtertwo){
		charachtertwo.hitpoints = charachtertwo.hitpoints - this.strength;
		console.log(charachtertwo.name + "HP:" + charachtertwo.hitpoints);
	},
	this.LevelUp = function(){
		this.age + 1;
		this.strength + 5;
		this.hitpoints + 25;
		console.log(this.name + this.age + this.strength + this.hitpoints);
	} 


}




var playerOne = new Charachter("Moe", "LumberJack", "Male", 12, 20, 21);
var playerTwo = new Charachter("Bart", "Hooligan", "Male", 8, 10, 11);

// console.log(playerOne.name);
playerOne.printstats();
playerTwo.printstats();

playerOne.IsAlive(playerOne);
playerTwo.Attack(playerOne);
playerOne.LevelUp();
