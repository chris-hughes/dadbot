function home(){
	return 	"<script type='text/javascript'>"+
				"function handleForm(subreddit, user){"+
					"return 'subreddit';"+
				"}"+
			"</script>"+

			"<h1>HOME view has been called</h1>"+
			"<form action=query>"+
  				"Subreddit: <input type='text' name='Subreddit'><br>"+
  				"User: <input type='text' name='User'><br>"+
  				"<input type='submit' value='Submit'>"+
			"</form>"
		   	;
}

exports.home = home;