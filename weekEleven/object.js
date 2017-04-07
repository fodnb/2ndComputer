var dog = {

    raining: true,
    noise: "WOOF!",
    makeNoise: function() {
        if (this.raining = true) {
            console.log(this.noise);
        }
    }
}

var cat = {
    raining: false,
    noise: "MEOW!",
    makeNoise: function() {
        if (this.raining = true) {
            console.log(this.noise);
        }
    }
}

// dog.makeNoise();

cat.raining = false;

// cat.makeNoise();

function massHysteria() {
    if((cat.raining === true) && (dog.raining === true)){
        console.log("Dogs and Cats living together Mass Hysteria!");
    }
else{
	console.log("Cats and Dogs not getting along!");
}
}


massHysteria();


function Animal(raining, noise){
    this.raining = true,
    this.noise = noise,
    this.makeNoise = function(){
        if(this.raining === true){
            console.log(this.noise);
        }
    }
}

var monkey = new Animal(true, "ooh!");

monkey.makeNoise();

 
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

}

var Hyundai = new Car("hyundai", "sonata", "1999");

console.log(Hyundai.make);




