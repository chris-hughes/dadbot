// Require modules

var http = require("http"),
    url  = require("url");

// define server

function startServer(route, handle){

	http.createServer(function(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname);

		route(handle, pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();

	}).listen(8888, function(){
		console.log("Express server listening on port %d", this.address().port);
	});

}

exports.startServer = startServer;