// Requiring express module
var express = require('express');
// Requiring instagram module
var ig = require('instagram-node').instagram();

// Initiating express app
var app = express();

// Setting root folder to look for static files
app.use(express.static(__dirname+'/assets'));
// Setting view engine to ejs
app.set('view engine', 'ejs');

// Serving static file on default route get
app.get('/', function(req, res) {
	res.render('pages/index');
}).listen(8000);

console.log('Server Running...');