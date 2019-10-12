

// Server.js file

var bodyParser = require('body-parser')
var express = require('express');
var request = require('request');

var app = express();
var Vue = require("vue");

const port = 3000;
const path=require("path");

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/city/:name', function(req, res){
	city=req.params.name
	url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID=3e2d927d4f28b456c6bc662f34350957';
	var x = request(url, function(error, response, body){
		weather_json = JSON.parse(body);
		console.log(weather_json)
		res.json(weather_json);	
	});
});

app.use(express.static('views'))