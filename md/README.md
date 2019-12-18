# Escape-Room

## Purpose ##  
This game allows the user to have a virtual escape room experience. The user will need to go through the presented riddles in order to escape/pass the game.

**Project Members**
1. Ally  
[Linkedin](https://www.linkedin.com/in/allyson-reyes/)  
[GitHub](https://github.com/areyes986)
2. Henok  
[Linkedin](https://www.linkedin.com/in/henok-gebremedhn-626a4b153/)  
[GitHub](https://github.com/henok-6411)
3. Vij  
[Linkedin](https://www.linkedin.com/in/vijayetarangarajan/)  
[GitHub](https://github.com/vijayetar)

4. Brendon  
[Linkedin](https://www.linkedin.com/in/brendon-hampton-37132899/)  
[GitHub](https://github.com/BrendonLH)

## How to Run this Game ##
From the terminal `open index.html` from root of the project.
​
OR 
​
`live-server` from the root of the project

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


## Wire Frame ##
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


## Image Links ##
[HomePage-Brick Image](https://unsplash.com/)  
[GamePage-Brick Image](https://unsplash.com/)  
[Blood-splash](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYvyNujTDMFpxcN6xzhcmHbil44f3ilcbK8CSVN_Kjp3ALhJJJg&s)  
[Blood-hand]( https://media.wired.com/photos/5bd262d4b1e96429a704ba17/master/w_2560%2Cc_limit/bloodyhand_top-1036615756.jpg)  
[home.html-background image](https://get.wallhere.com/photo/night-Moon-moonlight-swamp-house-haunted-digital-art-1149294.jpg)
[home.html-rain effect](https://github.com/bikkimahato/HTML-CSS-Projects/tree/master/RainAnimation)


### TodDo's 
        1. add methods and functions
                a. major functions 
                b. names and description
        2. Add purpose to readme ( how to use the app)
        3. Github Links/Linkedin
        4. Deployed github pages link
        5. github projects links


## Methods ##
1.   [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) : Used to review all the users' scores and then arrange them in descending order to list the top scores in the last page.  
2.   [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) : Used to stringify our UserArray (array of Objects) so that it can be stored in local storage and retrieved with each page load.  
3.   [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) : Used to parse elements stored in Local Storage.   

