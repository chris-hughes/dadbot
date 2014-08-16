var http = require('http');

// http.get("http://www.nodejs.org", function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });


http.get("http://www.reddit.com/api/login/paradigm_tee?user=paradigm_tee&passwd=test&api_type=json", function(res){
	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});