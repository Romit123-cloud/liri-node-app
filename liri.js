require("dotenv").config();

var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify)
//Spotify This Song Method
function spotifySong(reference) {
    if(reference.length === 0){
      reference = "I want it that way";
    }
    spotify
    .search({ type: 'track', query: reference })
    .then(function(response) {
      console.log(" ");
      console.log("-----Searching----"+reference+"---------");
      console.log(" ");
      for (var i = 0; i < 5; i++) {
        var spotifyResults =
        "--------------------" +
        //Artist Name
        "\nArtist(s): " + response.tracks.items[i].artists[0].name +
        // Song name
        "\nSong Name: " + response.tracks.items[i].name +
        // Album Name
        "\nAlbum Name: " + response.tracks.items[i].album.name +
        // Song Preview
        "\nPreview Link: " + response.tracks.items[i].preview_url;
        console.log(spotifyResults);
      }
      console.log(" ");
      console.log("---------------------- ");
      console.log(" ");
    })
    .catch(function(err) {
      console.log(err);
    });
   }


// axios.get("http://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     }
// );


var keys = require("./keys.js");