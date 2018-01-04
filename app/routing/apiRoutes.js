// required dependencies
var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");
var app = express();
//fetching the friends data
var friends = require('../data/friends.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//getting total list of the friends details
app.get("/api/friends", function(req, res) {
	 res.json(friends);
});
//adding new friend
app.post("/api/friends", function(req, res) {
	debugger;
	//console
	//user input object
	var userData = JSON.parse(req.body.userData);

	console.log("name:" +userData.name);
	console.log("user score:" +userData.scores);

	var userScores = userData.scores;

	var matchName = '';
	var matchImage = '';
	var maxDiff = 10000;

	//compute best friend match
	//iterating through all the friends data
	for (var i = 0; i < friends.length; i++) {

		var scoreDiff = 0;
		for (var j = 0; j < userScores.length; j++) {

			scoreDiff += Math.abs(friends[i].scores[j] - userScores[j]); 

		}
		console.log("score diff:"+scoreDiff);
		//friend with the lower difference will be saved
		if(maxDiff > scoreDiff){

			maxDiff = scoreDiff;
			matchName = friends[i].name;
			matchImage = friends[i].data;


		}
	}
	console.log("match image:" +matchImage);
	console.log("match name:"+matchName);
	friends.push(userData);
	res.json({'status': 'ok', 'matchName': matchName, 'matchImage': matchImage});	
});
//exporting API routes
module.exports = app;

