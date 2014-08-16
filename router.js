function route(handle, pathname, response){

	if (typeof handle[pathname]==='function') {
		handle[pathname](pathname, response);
	} else {
		console.log("No request handler for "+pathname);

		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404: nothing here");
		response.end();
	}
}

exports.route = route;