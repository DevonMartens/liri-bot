var keys = require("./keys.js");

var request = require('request');
var axios = require('axios');

//require bands in town and api key
var bandsintown = require('bandsintown')("codingbootcamp");
//A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
//properly installed
var moment = require('moment');
//file system node - work with my computer now Node.js filesystem reference between folders
var fs = require("fs");
// uses spotify api
var Spotify = require('node-spotify-api');
console.log(keys.Spotify)
var spotify = new Spotify(keys.Spotify);

// variables
var action = process.argv[2];
// value is passed arguement???
var value = process.argv.slice(3).join(" ");


//requirements



//var defaults
var DFMovie = 'Mr. Nobody.'
// on spotify it's not "the sign" it's I saw the sign
var DFSong = "I Saw The Sign"

// Function getSongInfo for 1st case "spotify-this-song":
// spotify-this-song: spotify api => check your spotify API
//  Artist(s)
// The song's name
//  A preview link of the song from Spotify
//  The album that the song is from
//undefeined= default song "var DFSong"
function getSongInfo(songName) {
    //var NameOfSong = value;
        //If user has not specified a song , default to "The Sign" by Ace of Bass
        //this is also declated above I am unsure where it needs to be located
        if (songName === "") {
          songName = "I Saw the Sign";
        }
    // spotify.search  spotify is the string .search allows to pull
    spotify.search({ type: 'track', query: songName }, function (err, data) {
    //error catch... .catch maybe better 
          //Artist(s) + song name?
          console.log("Artists: ", data.tracks.items[0].album.artists[0].name)
          // A preview link of the song from Spotify
          console.log("Preview Link: ", data.tracks.items[0].preview_url)
          // The album that the song is from
          console.log("Album Name: ", data.tracks.items[0].album.name)
        });
      }


//Case and Switch statement (differnt action = run api) based on different condition (node command)



//What we need: for concert-this - search the Bands in Town Artist terminal: 
//api codingbootcamp 
//Output: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
switch (action) {
    case "concert-this":
    getConcert (value)
    break;
// spotify-this-song: spotify api
//  Output: Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from, undefeined= default song "var DFSong"
case "spotify-this-song":
//should that be here or below?
   // if (value ==="") {
  //      value = DFSong;
 //   }
    getSongInfo (value)
    break;
//movie this OMDb API
//Output: Title of the moviem, Year the movie came out. IMDB Rating of the movie.
//More Output : Rotten Tomatoes Rating of the movie. Country where the movie was produced. Language of the movie.
// More:  Plot of the movie. Actors in the movie.
// undefeined= default song "var DFMovie"
case "movie-this":   
   if (!value) {
   value = DFMovie;
               }
getMovieInfo (value)
 break;
//do-what-it-says
//It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// show test will be shown for random.txt to test out the feature for movie-this and concert-this.
case "do-what-it-says":
        doWhatItSays()
        break;
      default:
        break;
    }

// Function getConcert for 1st case "concert-this":
//What we need: for concert-this - search the Bands in Town Artist terminal: 
//is "artist correct" as passed arguement?
function getConcert (artist) {
    var artist = value;
    //api codingbootcamp 
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
      .then(function (response) {
    //// Name of the venue
        console.log("Name of the venue:", response.data[0].venue.name);
    // Venue location - double check if venue.state will work
        console.log("Venue location:", response.data[0].venue.city);
    // in order to format the date .format is an actual function (use moment for parsing variable declared above)
        var date = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Date of the Event:", date);
      })
// .catch is a promise to handle errors  
      .catch(function (error) {
        console.log(error);
      });
  }

      
      function getMovieInfo (Movie) {
    //Do i need to declare this value
        
    //. get returns the value from the url (differnt from searching ) //check that reset worked for api key
    // orginal api key indicated that it had been deleted
    //.env has api key may need to be hiddem
        axios.get("http://www.omdbapi.com/?t=" + Movie + "&apikey=9a315c78")
          .then(function (data) {
//specifying return values   
            var results = `
            Title of the movie: ${data.data.Title}
            Year the movie came out: ${data.data.Year}
            IMDB Rating of the movie: ${data.data.Rated}
            Rotten Tomatoes Rating of the movie: ${data.data.Ratings[1].Value}
            Country where the movie was produced: ${data.data.Country}
            Language of the movie: ${data.data.Language}
            Plot of the movie: ${data.data.Plot}
            Actors in the movie: ${data.data.Actors}`;
            console.log(results)
          })
    //use catch 
          .catch(function (error) {
            throw error;
            //console.log(error);
          });
          //Response if user does not type in a movie title
          //again here or above 
          
      }
      
function doWhatItSays() {

    //readfile 
    //utf-8 type of encoded string 
    //Node file system 
    //readFile will work b/c random.text is in the same folder

    fs.readFile("random.txt", "utf-8", function (err, data) {
//data reference spotify data
//split array into substring
      data = data.split(",");
//only in this fuction action calls firsts and value calls second
      var action = data[0]
      var value = data[1]
      // getSongs(value)
      switch (action) {
        case "concert-this":
          getConcert(value)
          break;
        case "spotify-this-song":
          getSongInfo (value)
          break;
        case "movie-this":
          getMovieInfo (value)
          break;
        default:
          break;
        }
      });
    }
    