var http = require('http'),
	url  = require('url'),
	querystring = require('querystring'),
    view = require("./views/main");

function home(pathname, response){
	var body = view.main(pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function user(pathname, response){

	var test = http.get("http://www.nodejs.org", function(res) {
		console.log("Got response: " + res.statusCode);

		console.log('test: '+res);

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

function query(requrl, response){

	var query = querystring.parse(url.parse(requrl).query);

	if (query.Subreddit && !query.User){
		subreddit('/subreddit', response);
	} else if (!query.Subreddit && query.User){
		user('/user', response);
	} else {
		home('/', response);
	}

}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;
exports.query = query;