var http = require('http'),
	// url  = require('url'),
	// querystring = require('querystring'),
    view = require("./views/main");

function home(pathname, response){

	var body = view.main(pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function user(pathname, user, response){

	var test = http.get("http://www.nodejs.org", function(res) {
		console.log("Got response: " + res.statusCode);

		console.log('test: '+res);

	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});

	var data = user;

	var body = view.main(pathname, data);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function subreddit(pathname, subreddit, response){

	var data = subreddit;

	var body = view.main(pathname, data);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function query(pathname, query, response){

	if (query.Subreddit && !query.User){
		subreddit('/subreddit', query.Subreddit, response);
	} else if (!query.Subreddit && query.User){
		user('/user', query.User, response);
	} else {
		home('/', response);
	}

}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;
exports.query = query;