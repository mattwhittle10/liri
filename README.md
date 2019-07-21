# Liri Project

### Problem the app addresses
It is sometimes hard to find information about a particular song, movie, or even an upcoming event such as a concert. This app helps the user easily find information on these three categories. It also helps the user save any of their searches if they wanted to go back and revisit information they've found on their searches.

### How the app is layed out
This app is organized into three categories. Conerts, Movies, & songs. The user inputs the title of a movie, song, or the name of a band they'd like to see in concert. The app then returns information based on what the user searched.

### Instructions on running the app
1. The user will open the file and then the terminal/bash window in whatever code editor they are using.
2. The user will then type in the command line node liri.js and press enter. 
    2. This will give a message to the user of what they need to enter after 'node liri.js' in order to select a category to search. Type 'movie-this', 'spotify-this-song', 'concert-this', or 'do-what-it-says' to start your search.
3. The user will then type in node liri.js and then one of the 4 options available to them. 'movie-this', 'spotify-this-song', 'concert-this', or 'do-what-it-says'  
4. After the user has selected a category for example 'node liri.js movie-this' they need to then type in the movie that they wish to get information on. 
    4. Example: 'node liri.js movie-this shrek'
5. Once the user hits enter they will get a list of results and these results will be saved to a text file title 'log.txt' so the user can refer back to the information they've already searched.

### Technologies used
* Node.js used to run the liri.js file rather than needing to run it in a browser.
* Axios used to pull information in from the omdb api as well as the bandsintown api.
* Spotify npm package used for the songs api.
* Moment npm package used to reformat the date for responses.
* Fs from Node used to append the log.txt file when a user searches something.
* Switch Case function used to switch to the correct case based on what the user inputs.

### Link to Github


#### My Role
I created this from start to finish. I used past examples of code from our class and researched a lot on my own. I leveraged the npmjs.com website a lot to see how to use certain packages. 