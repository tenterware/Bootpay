var express = require('express');
var app = express();
//setting middleware
//app.use(express.static(__dirname)); //Serves resources from public folder
app.get('/feedback', function(req, res){
	res.send(req.headers);
	console.log(req.headers);
});
app.use(express.static(__dirname + '/public')); //Serves resources from public folder
var server = app.listen(8080);
