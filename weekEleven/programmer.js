function programmer(name, title, age, favLang){
		this.name = name;
		this.title = title;
		this.age = age;
		this.favLang = favLang;
		this.print = function(){
			console.log("Name: " + this.name + "\ntitle: " + this.title + "\nAge: " + this.age + "\nfavLang: " + this.favLang );

		}


}

var programmerOne = new programmer("joe", "frontend", 34, "js");

programmerOne.print();