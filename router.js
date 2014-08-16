function route(handle, pathname){
	console.log("routing "+pathname);

	console.log("XXX "+handle[pathname]);

	if (!typeof handle[pathname]==='function') {
		handle[pathname]();
	} else {
		console.log("No request handler for "+pathname);
	}
}

exports.route = route;