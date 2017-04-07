	

function digitalPal(hungry, sleepy, bored, age){

	this.hungry = hungry,
	this.sleepy = sleepy,
	this.bored = bored,
	this.age = 0,
	this.feed = function(){
		if(this.hungry === true){
			console.log("That was Yummy!");
			this.hungry = false;
			this.sleepy = true;
		}else if(this.hungry === false){
			console.log("No thanks I'm Full");
		}
	},
	this.sleep = function(){
		if(this.sleepy === true){		}
	},
	this.play = function(){
		if(this.bored = true){
			console.log("Yay lets play!");
			this.bored = false;
			this.hungry = true;
		}else if(this.bored = false){

			console.log("ZZZZZZZZZZZ!");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		}else if(this.sleepy === false){
			console.log("No way I'm not tired!");
			console.log("Not right now, Later?");
		}
	},
	this.increaseAge = function(){
		console.log("Happy Birthday to me! I am " + this.age + " years old!");
		this.age = this.age + 1;
	}
}


var dog = new digitalPal(true, true, false);

dog.outside = false;

dog.bark = function(){
	console.log("Woof! Woof!");
}
 
dog.goOutside = function(){
	if(this.outside = false){
		console.log("Yay, I love the Outdoors!");
		this.outside = true;
		this.bark();
	}else if(this.outside = true){
		console.log("We're already outside though");
	}
}

dog.goInside = function(){     if(this.outside = true){
console.log("Do we have to? Fine... ");         this.outside = false;
}else if(this.outside = false){         console.log("I'm already inside");

	}
}

// dog.goOutside();



var cat = new digitalPal(false, true, true);


cat.houseCondition = 40;


cat.meow = function(){
	console.log("Meow, Meow");
}

cat.destroyFurniture = function(){
	if(cat.houseCondition > 0){
	cat.houseCondition = cat.houseCondition - 10;
	console.log("MUAHHHAHAHHA! TAKE THAT FURNITURE!");
	cat.bored = false;
	cat.sleepy = true;
}
}

cat.buyNewFurniture = function(){
	cat.houseCondition = cat.houseCondition + 50;
	console.log("are you sure about that?");

}

// console.log(cat.houseCondition);
// cat.destroyFurniture();

// cat.destroyFurniture();



// cat.destroyFurniture();

// cat.destroyFurniture();

// cat.destroyFurniture();




// console.log(cat.houseCondition);


// cat.sleep();
// console.log("cats age " + cat.age);

// dog.sleep();
// console.log("dogs age " + dog.age);





// cat.play();

// cat.sleep();
// cat.buyNewFurniture();
// console.log(cat.houseCondition);
// cat.feed();
// dog.feed();


var pet = process.argv[2];
var method = process.argv[3];
	



// switch(pet){
// 	case "feed":
// 	this.feed();
// 	break;

// 	case "sleep":
// 	this.sleep();
// 	break;

// 	case "play":
// 	this.play();
// 	break;
// }
	
console.log(pet);
console.log(method);
pet + "." + method();


