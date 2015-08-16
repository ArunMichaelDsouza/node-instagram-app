// Requiring express module
var express = require('express');

// Initiating express app
var app = express();

// Setting root folder to look for static files
app.use(express.static(__dirname+'/www/'));

// Serving static file on default route get
app.get('/', function(req, res) {
	res.sendFile('index.html');
}).listen(8000);

console.log('Server Running...');