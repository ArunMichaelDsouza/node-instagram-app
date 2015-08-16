// Requiring express module
var express = require('express');

// Initiating express app
var app = express();

// Serving static file on default route get
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/www/index.html');
}).listen(8000);

console.log('Server Running...');