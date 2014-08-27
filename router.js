var url = require('url'),
	querystring = require('querystring');


function route(handle, requrl, response){

	var pathname = url.parse(requrl).pathname;
	var query = querystring.parse(url.parse(requrl).query);

	if (typeof handle[pathname]==='function') {
		handle[pathname](pathname, query, response);
	} else {
		console.log("No request handler for "+pathname);

		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404: nothing here");
		response.end();
	}
}

exports.route = route;