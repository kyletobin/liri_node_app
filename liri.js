
require("dotenv").config();
let Twitter = require("twitter");
let Spotify = require('node-spotify-api');
let keys = require("./keys");

let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

let getTweets = function() {
    let params = { screen_name: 'CodingAccount1' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
          for(let i = 0; i < tweets.length; i++){
            console.log(tweets[i].text);
          }  
           // console.log(tweets);
        }
    });
}

let getSpotify = function (songTitle) {
    spotify.search({ type: 'track', query: songTitle }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}

let getMovie = function (movieTitle) {

}

let doWhatItSays = function () {

}


let pickFunction = function(command, choice) {
    switch (command) {
        case "my-tweets":
            getTweets();
            break;
        case "spotify-this-song":
            getSpotify(choice);
            break;
        case "movie-this":
            getMovie(choice);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("Sorry what was that?")
    }
}


pickFunction(process.argv[2], process.argv[3]);