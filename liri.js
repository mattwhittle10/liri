require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: 'a296ce6a2f9f4d82bc0a18bdef3fe7a0',
    secret: '81ea763416b344d092c2a840e261a379'
  });


var inquirer = require("inquirer");


var search = (process.argv[2]);
var userSearch = (process.argv.slice(3).join(" "));

switch(search) {
    case "movie-this":
            axios.get("http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy").then(
                function(response) {
                    console.log("Movie Title: " + response.data.Title);
                    console.log("Imdb rating is: " + response.data.imdbRating);
                    console.log("Release Year: " + response.data.Year);
                    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                    console.log("Country it was produce in: " + response.data.Country);
                    console.log("Language: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot)
                    console.log("Actors: " + response.data.Actors);    
                });
    break;
    case "spotify-this-song":
            spotify.search(
                { type: 'track', 
                query: userSearch
                }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
              console.log("Song Title: " + data.tracks.items[0].artists[0].name);
              console.log("Artist: " + data.tracks.items[0].name);
              console.log("Link to Track: " + data.tracks.items[0].external_urls.spotify);
              console.log("Album: " + data.tracks.items[0].album.name)
              });
    break;
    case "concert-this":
            axios.get("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp").then(function(response){
                console.log(response.data[0].venue.name);
                console.log(response.data[0].venue.city + ", " + response.data[0].venue.region + " " + response.data[0].venue.country);
                console.log(response.data[0]);
            });
    break;
    default:
        console.log("Type movie, song, or band to start your search");
}