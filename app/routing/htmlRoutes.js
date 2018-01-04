//required dependencies
var path = require("path");
var express = require("express");
var router = express.Router();
//directing to home page
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})
//directing to survey page
router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})
//export html routes
module.exports = router;
