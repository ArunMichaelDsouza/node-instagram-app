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

// Configuring instagram app credentials
ig.use({
	client_id: 'e9b7c83b11ca4b8c8486aa02e7363934',
	client_secret : '9d60e4b6aece40d18b369554912b9aac'
});

// Serving static file on default route get
app.get('/', function(req, res) {
	res.render('pages/index');
}).listen(8000);

console.log('Server Running...');