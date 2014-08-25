url = require('url');

function route(handle, requrl, response){

	var pathname = url.parse(requrl).pathname;

	if (typeof handle[pathname]==='function') {
		pathname=='/query' ? handle[pathname](requrl, response) : handle[pathname](pathname, response);
	} else {
		console.log("No request handler for "+pathname);

		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404: nothing here");
		response.end();
	}
}

exports.route = route;