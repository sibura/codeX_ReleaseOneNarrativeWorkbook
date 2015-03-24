var fs = require('fs');
  
var players = fs.readdirSync("./football/")
    console.log(players);

    players.forEach(function (stars){
var content = fs.readFileSync("./football/"+stars,"utf8")
 	console.log(content.split("\n").length);
});