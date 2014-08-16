var view = require("./views/main");

function home(pathname, response){
	console.log("Request Handler 'home' was called");
	var body = view.main(pathname);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function user(pathname, response){
	console.log("Request Handler 'user' was called");
	var body = view.main(pathname);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function subreddit(pathname, response){
	console.log("Request Handler 'subreddit' was called");
	var body = view.main(pathname);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;