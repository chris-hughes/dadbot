var http = require('http'),
    view = require("./views/main"),
    util = require('util');

function home(pathname, response){
	var body = view.main(pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function user(pathname, response){

	var test = http.get("http://www.nodejs.org", function(res) {
		console.log("Got response: " + res.statusCode);

		console.log('test: '+util.inspect(res));

	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});

	// console.log('test: '+util.inspect(test));


	var body = view.main(pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function subreddit(pathname, response){
	var body = view.main(pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;