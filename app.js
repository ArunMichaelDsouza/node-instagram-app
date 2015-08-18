var express = require('express');
var ig = require('instagram-node').instagram();

var app = express();

app.use(express.static(__dirname+'/assets'));

app.set('view engine', 'ejs');

ig.use({ client_id: 'e9b7c83b11ca4b8c8486aa02e7363934',
         client_secret: '9d60e4b6aece40d18b369554912b9aac' });

app.get('/', function(req, res) {
	ig.media_popular(function(err, medias, remaining, limit) {
		console.log(medias);
		res.render('pages/index', {images : medias});
	});
}).listen(8000);	

console.log('Running...');
