var bC = require("./basicCard.js");
var cC = require("./closeCard.js");
var fs = require("fs");
var cardType = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];
var dataArray = [];


if (process.argv.length > 5) {
    for (var i = 5; i < process.argv.length; i++) {
        arg2.push(process.argv[i]);
    }
    console.log(arg2);
    var argument = arg2.toString();
    console.log(argument + "argument");
}




bC.prototype = {
    textLog: function(){

        fs.appendFile("bC.txt", arg1 + "," + arg2 + ",", function(err) {
            if (err) {
                console.log("error");
            } else {
                console.log("content added");
            }
        })
    },
    gettingQuesAns: function() {
        fs.readFile("bC.txt", "utf8", function(error, data) {
            var newData = data.toString();
            // console.log(newData);
            // console.log(newData.split(","));
            newestData = newData.split(",");
            var length = newestData.length;
            var newA = newestData.pop();
            var argArray1 = [];
            var argArray2 = [];

            for (var i = 0; i < newestData.length; i++) {
                if (i % 2 === 0) {
                    argArray1.push(newestData[i]);
                } else {
                    argArray2.push(newestData[i]);
                }
            }
            // console.log(argArray1);
            // console.log(argArray2);
            var x = Math.floor((Math.random() * argArray1.length));
             console.log(argArray2[x]);
            


            var questions = function(){
                console.log(argArray1[x]);
            }
           setTimeout(questions, 3000);


        })
    }


    	
    }

    



cC.prototype = {

    logClose: function(){
        this.partial();
        fs.appendFile("cC.txt", arg1 + "," + arg2 + "," + this.parText + ",", function(err) {
            if(err){
                console.log(err);
            }
            console.log("content added");
        })

    },
    cCGetInfo: function(){
        fs.readFile("cC.txt", "utf8", function(err, response){
            if(err){
                console.log(err);
            }

            var newResponse = response.toString();
            var newestResponse = newResponse.split(",");
            var popResponse = newestResponse.pop();
            var textArray  = [];
            var clozeArray = [];
            var partialArray = [];


            for(var i = 0; i < newestResponse.length; i++){
                if(i % 3 === 0){
                textArray.push(newestResponse[i])

                }else if(i % 3 === 1){
                    clozeArray.push(newestResponse[i]);
                }else{
                    partialArray.push(newestResponse[i]);
                }


            }

            // console.log(textArray);
            // console.log(clozeArray);
            // console.log(partialArray);
            console.log(textArray.length);
            var x = Math.floor((Math.random() * textArray.length));
            console.log(x);
            // console.log(textArray[x]);

            var partial = function(){
                  console.log(clozeArray[x]);

            }

          setTimeout(partial, 5000);
            console.log(partialArray[x]);

        })


    }



}












  



   
function basicCard(){
    var president = new bC(arg1, arg2);

    president.print();
    president.textLog();
    president.gettingQuesAns();
}

function askingQuestion(){
    var president = new bC(arg1, arg2);

    president.gettingQuesAns();
}


function closeCard(){
    var myFirst = new cC(arg1, arg2);  
    
    myFirst.textOnly();
    myFirst.clozeOnly();
    myFirst.logClose();
    myFirst.cCGetInfo();
}

switch(cardType){

case "one":
basicCard();
break;
case "two":
closeCard();
break;
case "three":
askingQuestion();
break;
}

