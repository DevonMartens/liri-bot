# liri-bot


This repository is called Liri Bot like Siri only Liri's function is not speach it is LIRI is a Language Interpretation and Recognition Interface. Liri works through the terminal's command line and gives you back data about music and movies. 

Liri uses: HTML, CSS, JavaScript, Jquery, API calls, and node.

The commands for Liri are listed below:
1. $ node liri.js concert-this 
- To use this command you will enter "$ node liri.js concert-this concert-this + artist/band name"
- This command will search the Bands in Town Artist Events API and return the	following information about each event to the terminal:
♣	Name of the venue
♣	Venue location
♣	Date of the Event (use moment to format this as "MM/DD/YYYY")

2. node liri.js spotify-this-song
- To use this command you will enter "$ node liri.js spotify-this-song + song name"
- This command will search the Spotify API and return the following information about he song in your terminal/bash window:
♣	Artist(s)
♣	The song's name
♣	A preview link of the song from Spotify
♣	The album that the song is from
- If no song is provided the by the API the information for "The Sign" by Ace of Base will return as a defualt song. 

3. $ node liri.js movie-this 
- To use this command you will enter "$ node liri.js movie-this  + movie name"
- This command will search the OMBD API and return the following information to your terminal/bash window:
o	  * Title of the movie.
	  * Year the movie came out.
	  * IMDB Rating of the movie.
	  * Rotten Tomatoes Rating of the movie.
	  * Country where the movie was produced.
	  * Language of the movie.
	  * Plot of the movie.
      * Actors in the movie.
- If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. The final command "$ node liri.js do-what-it-says" will 
o	Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
♣	It will run spotify-this-song for "I Want it That Way," and the text in random.txt.
♣	A test will be shown for random.txt to test out the feature for movie-this and concert-this.

Please view screen shot one and two of this working:

I plan on creating a gif later.
  




Please follow this link for a deployed version of the app:

This app uses JQuery and Node.js 

This was a homework assignment that I developed alone. 

Thank you for your time and please enjoy!

