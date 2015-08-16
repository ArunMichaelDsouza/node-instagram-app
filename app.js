var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);
	res.write('Hello World!');
	res.end();
}).listen(8000);

console.log('Server Running...');