function home(){
	console.log("Request Handler 'home' was called");
}

function user(){
	console.log("Request Handler 'user' was called");
}

function subreddit(){
	console.log("Request Handler 'subreddit' was called");
}

exports.home = home;
exports.user = user;
exports.subreddit = subreddit;