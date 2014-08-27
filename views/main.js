var home = require("./home"),
	user = require("./user"),
	subreddit = require("./subreddit");

var viewSelect = {};
viewSelect["/"] = home.home;
viewSelect["/home"] = home.home;
viewSelect["/user"] = user.user;
viewSelect["/subreddit"] = subreddit.subreddit;

function main(pathname, data){


	var body =  '<html>'+
			    '<head>'+
			    '<meta http-equiv="Content-Type" content="text/html; '+
			    'charset=UTF-8" />'+
			    '</head>'+
			    '<body>'+
			    viewSelect[pathname](data)+
			    '</body>'+
			    '</html>';

	return body;
}

exports.main = main;