require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
// var spotify = require('node-spotify-api');
var inquirer = require("inquirer");

var movieName = "shrek";

axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Imdb rating is: " + response.data.imdbRating);
        console.log("Release Year: " + response.data.Year);
        console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
        console.log("Country it was produce in: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot)
        console.log("Actors: " + response.data.Actors);
        
    })
    .catch(function(error){
    if (error.response){
        console.log("-----------Data-----------");
        console.log(error.response.data);
        console.log("-----------Status---------");
        console.log(eroor.response.status);
        console.log("-----------Status---------");
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error", error.message);
    }
    console.log(error.config);
});

// inquirer.prompt([
//     {
//         type: "input",
//         message: "Enter a movie title: ",
//         name: "title"
//     }
// ]).then(function(movie){
//     movieName.push(inquirerResponse.name);
//     console.log(movieName);
// });

// var movie = parseFloat(process.argv[2]);
// var number1 = parseFloat(process.argv[3]);
console.log("hello world");