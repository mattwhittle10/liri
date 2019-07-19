require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var spotify = require('node-spotify-api');

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("The movie rating is: " + response.data.imdbRating);
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
console.log("hello world");