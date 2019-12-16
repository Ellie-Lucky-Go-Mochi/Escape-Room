'use scrict';
///// GLOBAL ARRAYS /////
// var riddleArray = [];
// // var riddleIndexArray = [];
// // var allergyArray = [];
// // var allergyIndexArray = [];
var userArray = [];
var parseLocalStorageArray = [];

// var clueArray = ['clue1','clue2','clue3','clue4','clue5','clue6'];

// var round = 5;
// var currentUserScore = 0;
// var clue = 0;
// var currentUserIndex = 0;

// ///// GAME PAGE: CREATE BUTTONS TO ANSWER QUESTIONS /////
// var btnOne = document.createElement('button');
// var btnTwo = document.createElement('button');
// var btnThree = document.createElement('button');
// var btnFour = document.createElement('button');
// var buttonBox = document.getElementById('button-container');
// var nextPage = document.getElementById('nextPage');
// var answer = document.getElementById('answer');

// ///// GAME PAGE: CREATE QUESTION /////
// var questionBox = document.getElementById('question');
// // var container = document.getElementById('container');

// ///// GAME PAGE: RANDOM FUNC GENERATOR /////
// function randomIndex(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

///// HIDE FUNC /////
function hide(elem) {
  elem.style.display = 'none';
}

///// SHOW FUNC /////
function show(elem) {
  elem.style.display = 'block';
}

///// LOCAL STORAGE FUNCTIONS /////
///// INDEXPAGE: function LOCALSTORAGE STORE userArray /////
function saveLocalStorageArray(){
  var storeString = JSON.stringify(userArray);
  localStorage.setItem('currentUser', storeString);
}

///// INDEXPAGE: function LOCALSTORAGE RETRIEVE userArray /////
function parseLocalStorage(){
  var retrieveString = localStorage.getItem('currentUser');
  parseLocalStorageArray = JSON.parse(retrieveString);
  console.log('this is the parsed Local Storage Array = ', parseLocalStorageArray);
  return parseLocalStorageArray;
}

///// GAME PAGE: LOCALSTORAGE retrieve user name and score///
// function retrieveUserArray () {
//   parseLocalStorage();
//   if (parseLocalStorageArray.length > 0) {
//     currentUserIndex = parseLocalStorageArray.length - 1;
//     userArray = parseLocalStorageArray;
//     currentUserScore = userArray[currentUserIndex].score;
//     console.log('this is our current user', userArray[currentUserIndex].username, 'this is our current user score', currentUserScore);
//   }
//   else {
//     userArray = [];
//   }
// }

///// RIDDLE CONSTRUCTOR /////

// function Riddle(riddle, reply, choiceOne, choiceTwo, choiceThree, choiceFour) {
//   this.riddle = riddle;
//   this.reply = reply;
//   this.choiceOne = choiceOne; ///choice
//   this.choiceTwo = choiceTwo; //choices
//   this.choiceThree = choiceThree;
//   this.choiceFour = choiceFour;
//   riddleArray.push(this);
// }


// function createRiddleArray() {
//   new Riddle('You can drop me from the tallest building and I will be fine, but if you drop me in water I die. What am I?', 'Paper', 'Rock', 'Scissor', 'Paper', 'Bat');
//   new Riddle('What has a head and a tail, but no body?', 'Coin', 'Snake', 'Coin', 'paper', 'towel');
//   new Riddle('What has an eye but can not see?', 'Needle', 'Bat', 'Pen', 'Needle', 'Pirate');
//   new Riddle('What gets wetter and wetter the more it dries?', 'Towel', 'Toe', 'Water', 'Face', 'Towel');
//   new Riddle('Your height is six feet, you are an assistant at a butcher shop, and you wear size 9 shoes. What do you weigh in pounds?', 'Meat', '192', 'Table', 'Horse', 'Meat');
//   new Riddle ('There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it?','watermelon','lime','watermelon','blah', 'blah');
//   new Riddle ('What kind of room has no doors or windows?','mushroom');
//   new Riddle ('What kind of tree can you carry in your hand?','palm');
//   new Riddle ('Which word in the dictionary is spelled incorrectly?','incorrectly');
//   new Riddle ('Which creature walks on four legs first, two legs later, and three legs before it dies?','man');
//   new Riddle ('If you have me, you want to share me. If you share me, you have not got me. What am I?','secret');
//   new Riddle('What gets broken without being held?','promise');
//   // new Riddle('Feed me and I live, yet give me a drink and I die. What am I?','fire');
//   // new Riddle('A person is pushing his car outside along the road when he comes to a nearby hotel and shouts, "I am bankrupt!" What is he up to?','he is playing monopoly');
//   // new Riddle('What do the poor have in plenty, the rich need it, and if you eat it, you will die?','nothing');
//   // new Riddle('Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?','coffin');
//   // new Riddle('What can travel around the world while staying in a corner?','stamp');
//   // new Riddle('I am tall when I am young and I am short when I am old. What am I?','candle');
//   // new Riddle('What has hands but never clap','clock');
//   // new Riddle('Forward I am heavy, but backward I am not. What am I?','ton');
//   // new Riddle('I have married many women, but am a bachelor. Who am I?','priest');
//   // new Riddle('With my help you can look through walls. What am I?','window');
//   // new Riddle('If you take off my skin, I will make you cry! What am I?','onion');
//   // new Riddle('What is at the end of a rainbow?','letter w');
//   // new Riddle('What is as light as a feather, but no one can hold it for more than a minute?','breath');
//   // new Riddle('Which weighs more, a pound of feathers or a pound of bricks?','Neither');
//   // new Riddle('What occurs once in every minute, twice in every moment, yet never in a thousand years?', 'letter m');
//   // new Riddle('What has a neck but no head?','bottle');
//   // new Riddle('Voiceless it cries, wingless flutters, toothless bites, mouthless mutters. What am I?','wind');
//   // new Riddle('Alive without breath, as cold as death, never thirsty, ever drinking, all in mail never clinking.','fish');
//   // new Riddle('A box without hinges, key, or lid,yet golden treasure inside is hid. What is it?','egg');
//   // new Riddle('Tear one off and scratch my head what was red is black instead. What am I?','matchstick');
//   // new Riddle('What is always on its way but never arrives?','tomorrow');
//   // new Riddle('What kills by drowning but is never wet?','quicksand');
//   // new Riddle('What goes up but never comes down?','age');
// }
///// create bio traits

// Creating the Allergy trait array
// function Allergy(allergy, eatable, eat, choiceOne, choiceTwo, choiceThree, choiceFour) {
//   this.allergy = allergy;
//   this.eatable = eatable;
//   this.eat = eat;
//   this.choiceOne = choiceOne; ///choice
//   this.choiceTwo = choiceTwo; //choices
//   // this.choiceThree = choiceThree;
//   // this.choiceFour = choiceFour;
//   allergyArray.push(this);
// }

// function createAllergyArray() {
//   new Allergy('shellfish', 'sushi', 'Hell no', 'yes, of course', 'Hell no');
//   new Allergy('peanuts', 'fresh rolls with peanut sauce', 'Hell no', 'yes, of course', 'Hell no');
//   new Allergy('dairy', 'icecream', 'Hell no', 'yes, of course', 'Hell no');
//   new Allergy('soy', 'sushi with sauce on it', 'Hell no', 'yes, of course', 'Hell no');
//   new Allergy('fava beans', 'asparagus and favabean salad', 'Hell no', 'yes, of course', 'Hell no');
//   // new Allergy ('shellfish', 'salmon cookies', 'Y');
//   // new Allergy ('peanuts', 'pecan pie', 'Y');
//   // new Allergy ('dairy', 'vegan pie','Y');
//   // new Allergy ('soy', 'chickpea and rice', 'Y');
//   // new Allergy ('fava beans', 'edamame', 'Y' );
// }

///// INDEXPAGE: USER CONSTRUCTOR /////
function MakeUserArray(username){
  this.username = username;
  this.score = 0;
  userArray.push(this);
}


///// INDEXPAGE: get user name into local storage///////
var userInput = document.getElementById('userInput');
userInput.addEventListener('submit', handleClick);

///// INDEXPAGE: USER HANDLECLICK EVENT TO Store username /////
function handleClick(event) {
  event.preventDefault();
  var name = event.target.name.value;
  parseLocalStorage();

  if (parseLocalStorageArray){
    userArray = parseLocalStorageArray;
  }
  new MakeUserArray(name);
  saveLocalStorageArray();
}

//// generate random traits

// ///// GAME PAGE: APPEND QUESTIONS TO DOM /////
// var p = document.createElement('p');
// function makeQuestion() {
//   p = document.createElement('p');
//   p.textContent = riddleArray[round].riddle;
//   questionBox.appendChild(p);
// }

// ///// GAME PAGE: APPEND BUTTONS TO DOM /////
// function makeButton() {
//   btnOne = document.createElement('button');
//   btnOne.textContent = riddleArray[round].choiceOne;
//   buttonBox.appendChild(btnOne);

//   btnTwo = document.createElement('button');
//   btnTwo.textContent = riddleArray[round].choiceTwo;
//   buttonBox.appendChild(btnTwo);

//   btnThree = document.createElement('button');
//   btnThree.textContent = riddleArray[round].choiceThree;
//   buttonBox.appendChild(btnThree);

//   btnFour = document.createElement('button');
//   btnFour.textContent = riddleArray[round].choiceFour;
//   buttonBox.appendChild(btnFour);
// }

// /////// GAME PAGE: function for BUTTONS to check answer////
// function buttonCheckAnswer() {
//   btnOne.addEventListener('click', checkAnswer);
//   btnTwo.addEventListener('click', checkAnswer);
//   btnThree.addEventListener('click', checkAnswer);
//   btnFour.addEventListener('click', checkAnswer);
// }

// ///// GAME PAGE: FUNC TO CHECK ANSWERS and add SCORE /////
// function checkAnswer(event) {
//   event.preventDefault();
//   var button = event.target.textContent;
//   console.log(button);
//   if (button === riddleArray[round].reply) {
//     show(answer);
//     document.getElementById('answer').innerHTML = `That's right! ${clueArray[clue]}`;
//     clue++;
//     currentUserScore += 100;
//     console.log('this is the current user Score', userArray[currentUserIndex].username, currentUserScore);
//     hide(buttonBox);
//   }
//   else {
//     hide(buttonBox);
//     show(answer);
//     document.getElementById('answer').innerHTML = 'Thats wrong!!';
//   }
// }

// ///// GAME PAGE: FUNC TO NEXT QUESTION ////.
// function nextQuestion() {
//   hide(p);
//   round--;
//   hide(answer);
//   hide(btnOne);
//   hide(btnTwo);
//   hide(btnThree);
//   hide(btnFour);
//   var nextQ = document.getElementById('nextQuestion');
//   if (round === 0) {
//     answer.innerHTML = `Your score is: ${currentUserScore}`;
//     show(answer);
//     hide(nextQ);
//     console.log('You are done!!!');
//     show(nextPage);
//     //// update user array score
//     userArray[currentUserIndex].score = currentUserScore;
//     console.log('this is the updated userArray', userArray);
//     //// place the updated scores in local storage
//     saveLocalStorageArray();
//   }
//   else {
//     console.log('This is round', round);
//     makeButton();
//     show(buttonBox);
//     makeQuestion();
//     buttonCheckAnswer();
//   }
// }





// createAllergyArray();

/////// GAME PAGE: call functions
// function onGamePageLoad() {
// var gamepage = document.getElementById('gamepage');
// gamepage.setAttribute = (onclick);
// gamepage.onclick = location.href = 'allyGame.html';
// console.log('this is the round number', round);
// retrieveUserArray();
// p.textContent = riddleArray[round].riddle;
// questionBox.appendChild(p);
// hide(nextPage);
// makeButton();
// buttonCheckAnswer();
// // }

/////// INDEXPAGE: Function to create array
// createRiddleArray();
/////// GAME PAGE: gets loaded
// onGAmePageLoad();






// bio's
// console.log(`you are a ${age} year old and have stumbled up a beaten down house with a big red metal door. At first you are hesistant to go in, but you notice that it is ${weather} outside. Upon entering, you recall someone before saying you are hangry, so you reach into your backpack and pull out a candy bar to munch on. Unfortunately you notice it contains ${allergy} which you are deathly allergic to. after tossing the death bar, you turn to leave rather than starve in a building and notice the door is shut and bolted locked and electrified. you now have to find a way out.....   `);








