// Require modules

var http = require("http"),
    url  = require("url");

// define server

function startServer(route, handle){

	http.createServer(function(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname);

		route(handle, request.url, response);


	}).listen(8888, function(){
		console.log("Server listening on port %d", this.address().port);
	});

}

exports.startServer = startServer;