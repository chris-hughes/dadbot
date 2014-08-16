function home(response){
	console.log("Request Handler 'home' was called");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Home Page");
	response.end();
}

function user(response){
	console.log("Request Handler 'user' was called");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello User Page");
	response.end();
}

function subreddit(response){
	console.log("Request Handler 'subreddit' was called");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello subreddit Page");
	response.end();
}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;