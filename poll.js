var http = require('http');

// visit this to see what the json looks like
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
				
			console.log('#------------')
			items.forEach(function(item){
				console.log("-----\n\n" +item.data.body)
			})

			

		})

		setTimeout(poll, 2000)

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	  setTimeout(poll, 3000)
	});
}


poll();
