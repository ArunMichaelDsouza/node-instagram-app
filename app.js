// Requiring http module
var http = require('http');

// Creating http server
http.createServer(function(req, res) {
	res.writeHead(200); // Setting header response code
	res.write('Hello World!'); // Writing to body
	res.end(); // Ending response
}).listen(8000); // Listening at port

console.log('Server Running...'); // Logging to server console