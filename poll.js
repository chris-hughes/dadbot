var http = require('http'),
	querystring = require('querystring');

// visit this if you need to see what the json looks like
var url = 'http://www.reddit.com/r/AskReddit/comments.json';

var last_id;

function poll(){

	// add a random query to get around caching - query doesn't affect anything
	http.get(url + '?' + Math.random(), function(res){

		var data = ''
	  	res.on('data', function (chunk) {
	    	data += chunk;
		});

		res.on('end', function(){

			var obj = JSON.parse(data);

			var items = obj.data.children;

			// reduce remove any seen items
			var position = items
				.map(function(item){
					return item.data.id;
				})
				.indexOf(last_id)

			// set the last id (which is the first item)
			last_id = items[0].data.id;

			// remove any repeated comments from previous polls
			if (position > -1){
				items = items.slice(0, position);
			}
				
			console.log('#------------ '+items.length);
			items.forEach(function(item){
				if (item.data.body.substring(0,3)=="I'm"){
					console.log("-----\n\n" +item.data.body)
				}
			})

			

		})

		setTimeout(poll, 2000)

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	  setTimeout(poll, 3000)
	});
}

var query = {
	api_type: 'json',
	passwd : 'calvinball',
	rem: 0,
	user: 'dad_knows_best'
};

var test = {
	hostname: 'www.reddit.com',
	port: 80,
	// path: '/api/login/dad_knows_best?user=dad_knows_best&passwd=calvinball&api_type=json',
	path: '/api/login/'+query.user+'?'+querystring.stringify(query),
	method: 'POST'

};



function gogogo(){

	// login and get modhash and cookie
	var req = http.request(test, function(res){

		var data = ''
	  	res.on('data', function (chunk) {
	    	data += chunk;
		});

		res.on('end', function(){
			var obj = JSON.parse(data);
			console.log(obj);

			var modhash = obj.json.data.modhash;
			var cookie = obj.json.data.cookie;
			postComment(modhash, cookie);
		});

	});

	req.on('error', function(e) {
  		console.log('problem with request: ' + e.message);
	});

	req.end();
}

function postComment(modhash, cookie){

	var q = {
		api_type: 'json', 
		text : 'testing',
		thing_id: 't3_2ej09h',
		// uh modhash
	}

	var postComment = {
		hostname: 'www.reddit.com',
		port: 80,
		// path: '/api/login/dad_knows_best?user=dad_knows_best&passwd=calvinball&api_type=json',
		path: '/api/comment?'+querystring.stringify(q),
		method: 'POST',
		headers: {
			'X-Modhash' : modhash,
			'Cookie' : 'reddit_session=' + cookie
		}
	};
	var req = http.request(postComment, function(res){
		console.log(res);

		var data = ''
	  	res.on('data', function (chunk) {
	    	data += chunk;
		});

		res.on('end', function(){
			var obj = JSON.parse(data);
			console.log(obj);
		});

	});

	req.on('error', function(e) {
  		console.log('problem with request: ' + e.message);
	});

	req.end();

}

// gogogo();
poll();
