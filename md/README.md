# Escape-Room

## Purpose ##  
This game allows the user to have a virtual escape room experience. The user will need to go through the presented questions in order to escape/pass the game. The questions are generated in a random order and the score is updated based on the correct answers. At the end of the game, the user can see the top 5 scores on the last page, and can get information about the developers.

## Project Detail ##
Information regarding our pages:
 1. index.html: This is the home page.  It is linked to home.css and app.js and homeapp.js files.  The page starts the game with the user entering their username.  It is linked to the game page.
 2. Game.html: This is the game page. It is linked to game.css, app.js and gameapp.js files. This is the game page with the random questions and buttons for selecting answers, as well as button to render the next question. There are currently __ten__ questions generated. Once completed, the user can see their total score. There is a button to get to the top scores. 
 3. scoreBoard.html: This is the score page to view the top scores only. There is a button link for the user to play again and restart the game from the home page, or read about the developers on the next page.
 4. AboutMe.html: Provides information about the developers and also links back to the home page.  

## Project Members ##
1. Allyson Reyes   
[Linkedin](https://www.linkedin.com/in/allyson-reyes/)  
[GitHub](https://github.com/areyes986)
2. Henok Gebremedhn  
[Linkedin](https://www.linkedin.com/in/henok-gebremedhn-626a4b153/)  
[GitHub](https://github.com/henok-6411)
3. Vijayeta Rangarajan  
[Linkedin](https://www.linkedin.com/in/vijayetarangarajan/)  
[GitHub](https://github.com/vijayetar)
4. Brendon Hampton  
[Linkedin](https://www.linkedin.com/in/brendon-hampton-37132899/)  
[GitHub](https://github.com/BrendonLH)

## How to Run this Game ##
Use `live-server` from index.html and from the deployed website: https://ellie-lucky-go-mochi.github.io/Escape-Room/
​

## User Stories

### 1. As a User...I want to test my knowledge with random questions in a fun and interactive way(Extra Large) ###

**Feature Tasks**  
        a. Generate random questions  
**Acceptance Tests**  
        a. Ensure questions render randomly


### 2. As a User...I want to challenge myself by increased difficulty with time constraint(medium). ### 
 **Feature Tasks**  
        a. Able to modify the time constraint  
**Acceptance Tests**  
        a. the game stops at end of time constraint

### 3. As a User...I want to be able to see the top scores of all the users(medium). ###

**Feature Tasks**   
        a. display end score for user  
        b. display all top scores at the beginning(optional) and end.    
**Acceptance Tests**  
        a. final top user scores update with new top user score


### 4. As a User...I want to be a random character with a unique Bio(medium). ###

**Feature Tasks**  
        a. Generate random character traits  
**Acceptance Tests**  
        a. no consecutive two duplicates of characters
        

### 5. As a User...I want to be rewarded for completing a challenge(medium) ###

**Feature Tasks**  
        a. User will progress through questions as questions are correctly answered.  
**Acceptance Tests**  
        a. when a question is answered user moves onto next question


## Wire Frame Ideas ##
![wireframe](/img/WireFrame.jpg)

## Domain Model ##
![Domain Model](/img/DomainModel.png)

## Resources ##
[Random Number Generator from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)    
[Google Fonts](https://fonts.google.com/?category=Display&selection.family=Rammetto+One)  
??[Chart JS](https://www.chartjs.org/docs/latest/)   
[Timer Function](https://www.geeksforgeeks.org/javascript-timer/)  
[Show/Hide Elements](https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/) 
[Rain effect](https://github.com/bikkimahato/HTML-CSS-Projects/tree/master/RainAnimation)  
[Creepy Sound Effect](http://soundbible.com/2165-Creepy-Background.html)  
[Remove Background Image](https://www.remove.bg/upload)  
[Thunder Sound Effect-Home page](http://soundbible.com/2053-Thunder-Sound-FX.html)


## Image Links ##
[HomePage-Brick Image](https://unsplash.com/)  
[GamePage-Brick Image](https://unsplash.com/)  
[Blood-splash](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYvyNujTDMFpxcN6xzhcmHbil44f3ilcbK8CSVN_Kjp3ALhJJJg&s)  
[Blood-hand]( https://media.wired.com/photos/5bd262d4b1e96429a704ba17/master/w_2560%2Cc_limit/bloodyhand_top-1036615756.jpg)  
[Background Image for Home Page](https://get.wallhere.com/photo/night-Moon-moonlight-swamp-house-haunted-digital-art-1149294.jpg)  
[Rain Effect on Home page](https://github.com/bikkimahato/HTML-CSS-Projects/tree/master/RainAnimation)  
[Background Image for Game Page](https://unsplash.com/photos/GhxWry42_zQ)  
[Spooky Lady used for Game Page](https://unsplash.com/photos/60jofh7Vti0)  



### TodDo's ###
1. add methods and functions  
        a. major functions   
        b. names and description  
2. Add purpose to readme ( how to use the app)  
~~3. Github Links/Linkedin~~  
~~4. Deployed github pages link~~  
~~5. github projects links~~
6. Delete unused images in image folder and unused image links in README

## Functions ##
1. function MakeUserArray(username): 
        a. creates the MakeUserArray object each time a user plays the game by inserting the variable username. 
        b. the user is then assigned a property name (username) and property score (score) and stored in an array userArray.
        c. This is only used in the index.html page load.
1. Local Storage:  
        a. function saveLocalStorageArray() : will save userArray to local storage using the stringify method (also described later) with the key 'current user'.
        b. function parseLocalStorageArray = retrieves the userArray with the key 'current user'.
        c. It is used in all three game html pages - index.html, Game.html, scoreBoard.html.  


## Methods ##
1.   [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) : Used to review all the users' scores and then arrange them in descending order to list the top scores in the last page.  
2.   [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) : Used to stringify our UserArray (array of Objects) so that it can be stored in local storage and retrieved with each page load.  
3.   [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) : Used to parse elements stored in Local Storage.   

### GitHub Project Links ###
We used our Github [Project](https://github.com/Ellie-Lucky-Go-Mochi/Escape-Room/projects) links to follow our to-do list and complete our tasks.
