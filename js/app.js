'use scrict';
///// GLOBAL ARRAYS /////
var riddleArray = [];
var riddleIndexArray = [];
var allergyArray = [];
var allergyIndexArray = [];
var userArray = [];
var name = '';

var clueArray = ['clue1','clue2','clue3','clue4','clue5','clue6'];

var round = 5;
var score = 0;
var clue = 0;

///// CREATE BUTTONS /////
var btnOne = document.createElement('button');
var btnTwo = document.createElement('button');
var btnThree = document.createElement('button');
var btnFour = document.createElement('button');
var buttonBox = document.getElementById('button-container');
var nextPage = document.getElementById('nextPage');

///// CREATE QUESTION /////
var questionBox = document.getElementById('question');
var container = document.getElementById('container');



///// RANDOM FUNC GENERATOR /////
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

///// HIDE FUNC /////
function hide(elem) {
  elem.style.display = 'none';
}

///// SHOW FUNC /////
function show(elem) {
  elem.style.display = 'block';
}


///// RIDDLE CONSTRUCTOR /////

function Riddle(riddle, reply, choiceOne, choiceTwo, choiceThree, choiceFour) {
  this.riddle = riddle;
  this.reply = reply;
  this.choiceOne = choiceOne; ///choice
  this.choiceTwo = choiceTwo; //choices
  this.choiceThree = choiceThree;
  this.choiceFour = choiceFour;
  riddleArray.push(this);
}


function createRiddleArray() {
  new Riddle('You can drop me from the tallest building and I will be fine, but if you drop me in water I die. What am I?', 'Paper', 'Rock', 'Scissor', 'Paper', 'Bat');
  new Riddle('What has a head and a tail, but no body?', 'Coin', 'Snake', 'Coin', 'paper', 'towel');
  new Riddle('What has an eye but can not see?', 'Needle', 'Bat', 'Pen', 'Needle', 'Pirate');
  new Riddle('What gets wetter and wetter the more it dries?', 'Towel', 'Toe', 'Water', 'Face', 'Towel');
  new Riddle('Your height is six feet, you are an assistant at a butcher shop, and you wear size 9 shoes. What do you weigh in pounds?', 'Meat', '192', 'Table', 'Horse', 'Meat');
  new Riddle ('There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it?','watermelon','lime','watermelon','blah', 'blah');
  new Riddle ('What kind of room has no doors or windows?','mushroom');
  new Riddle ('What kind of tree can you carry in your hand?','palm');
  new Riddle ('Which word in the dictionary is spelled incorrectly?','incorrectly');
  new Riddle ('Which creature walks on four legs first, two legs later, and three legs before it dies?','man');
  new Riddle ('If you have me, you want to share me. If you share me, you have not got me. What am I?','secret');
  new Riddle('What gets broken without being held?','promise');
  // new Riddle('Feed me and I live, yet give me a drink and I die. What am I?','fire');
  // new Riddle('A person is pushing his car outside along the road when he comes to a nearby hotel and shouts, "I am bankrupt!" What is he up to?','he is playing monopoly');
  // new Riddle('What do the poor have in plenty, the rich need it, and if you eat it, you will die?','nothing');
  // new Riddle('Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?','coffin');
  // new Riddle('What can travel around the world while staying in a corner?','stamp');
  // new Riddle('I am tall when I am young and I am short when I am old. What am I?','candle');
  // new Riddle('What has hands but never clap','clock');
  // new Riddle('Forward I am heavy, but backward I am not. What am I?','ton');
  // new Riddle('I have married many women, but am a bachelor. Who am I?','priest');
  // new Riddle('With my help you can look through walls. What am I?','window');
  // new Riddle('If you take off my skin, I will make you cry! What am I?','onion');
  // new Riddle('What is at the end of a rainbow?','letter w');
  // new Riddle('What is as light as a feather, but no one can hold it for more than a minute?','breath');
  // new Riddle('Which weighs more, a pound of feathers or a pound of bricks?','Neither');
  // new Riddle('What occurs once in every minute, twice in every moment, yet never in a thousand years?', 'letter m');
  // new Riddle('What has a neck but no head?','bottle');
  // new Riddle('Voiceless it cries, wingless flutters, toothless bites, mouthless mutters. What am I?','wind');
  // new Riddle('Alive without breath, as cold as death, never thirsty, ever drinking, all in mail never clinking.','fish');
  // new Riddle('A box without hinges, key, or lid,yet golden treasure inside is hid. What is it?','egg');
  // new Riddle('Tear one off and scratch my head what was red is black instead. What am I?','matchstick');
  // new Riddle('What is always on its way but never arrives?','tomorrow');
  // new Riddle('What kills by drowning but is never wet?','quicksand');
  // new Riddle('What goes up but never comes down?','age');
}
///// create bio traits

// Creating the Allergy trait array
function Allergy(allergy, eatable, eat, choiceOne, choiceTwo, choiceThree, choiceFour) {
  this.allergy = allergy;
  this.eatable = eatable;
  this.eat = eat;
  this.choiceOne = choiceOne; ///choice
  this.choiceTwo = choiceTwo; //choices
  // this.choiceThree = choiceThree;
  // this.choiceFour = choiceFour;
  allergyArray.push(this);
}

function createAllergyArray() {
  new Allergy('shellfish', 'sushi', 'Hell no', 'yes, of course', 'Hell no');
  new Allergy('peanuts', 'fresh rolls with peanut sauce', 'Hell no', 'yes, of course', 'Hell no');
  new Allergy('dairy', 'icecream', 'Hell no', 'yes, of course', 'Hell no');
  new Allergy('soy', 'sushi with sauce on it', 'Hell no', 'yes, of course', 'Hell no');
  new Allergy('fava beans', 'asparagus and favabean salad', 'Hell no', 'yes, of course', 'Hell no');
  // new Allergy ('shellfish', 'salmon cookies', 'Y');
  // new Allergy ('peanuts', 'pecan pie', 'Y');
  // new Allergy ('dairy', 'vegan pie','Y');
  // new Allergy ('soy', 'chickpea and rice', 'Y');
  // new Allergy ('fava beans', 'edamame', 'Y' );
}

///// USER CONSTRUCTOR /////
function MakeUserArray(username, score){
  this.username = username;
  this.score = score;
  userArray.push(this);
}


///// get user name
var userInput = document.getElementById('userInput');
userInput.addEventListener('submit', handleClick);

///// USER HANDLECLICK EVENT /////

function handleClick(event){
  event.preventDefault();
  name = event.target.name.value;
  // return name;
  MakeUserArray.user = name;
  userArray.push(MakeUserArray.user);
  localStorage.setItem('firstUser',JSON.stringify(userArray));
  // console.log(userArray);
}

//// generate random traits

///// APPEND QUESTIONS TO DOM /////
var p = document.createElement('p');
function makeQuestion() {
  p = document.createElement('p');
  p.textContent = riddleArray[round].riddle;
  questionBox.appendChild(p);
}

///// APPEND BUTTONS TO DOM /////
function makeButton() {
  btnOne = document.createElement('button');
  btnOne.textContent = riddleArray[round].choiceOne;
  buttonBox.appendChild(btnOne);

  btnTwo = document.createElement('button');
  btnTwo.textContent = riddleArray[round].choiceTwo;
  buttonBox.appendChild(btnTwo);

  btnThree = document.createElement('button');
  btnThree.textContent = riddleArray[round].choiceThree;
  buttonBox.appendChild(btnThree);

  btnFour = document.createElement('button');
  btnFour.textContent = riddleArray[round].choiceFour;
  buttonBox.appendChild(btnFour);
}

///// FUNC TO CHECK ANSWERS /////
function checkAnswer(event) {
  event.preventDefault();
  var button = event.target.textContent;
  console.log(button);
  if (button === riddleArray[round].reply) {
    show(answer)
    document.getElementById('answer').innerHTML = `That's right! ${clueArray[clue]}`;
    clue++
    score += 100;
    console.log(score);
    hide(buttonBox);
  }
  else {
    hide(buttonBox);
    show(answer)
    document.getElementById('answer').innerHTML = 'Thats wrong!!'};
}

///// FUNC TO NEXT QUESTION ////.
function nextQuestion() {
  hide(answer);
  hide(p);
  round--;
  hide(btnOne);
  hide(btnTwo);
  hide(btnThree);
  hide(btnFour);
  if (round >= 0) {
    console.log('This is round', round);
    makeButton();
    show(buttonBox);
    makeQuestion();
    btnOne.addEventListener('click', checkAnswer);
    btnTwo.addEventListener('click', checkAnswer);
    btnThree.addEventListener('click', checkAnswer);
    btnFour.addEventListener('click', checkAnswer);
  } else {
    var nextQ = document.getElementById('nextQuestion');
    hide(nextQ);
    new MakeUserArray(name,score);
    localStorage.setItem('gameUser', JSON.stringify(userArray));
    // MakeUserArray.score = score;
    // userArray.push(MakeUserArray.score);
    saveArray();
    show(answer)
    document.getElementById('answer').innerHTML = `Your score is: ${score}`;
    show(nextPage);
    // var scorePage = document.createElement('a');
    // scorePage.href = './html/scoreBoard.html';
    // scorePage.text = 'check your score';
  
  }
}

///// STORE SCORE /////

function saveArray(){
  var scoreString = JSON.stringify(userArray);
  // var userString = JSON.stringify(username);
  localStorage.setItem('userScore', scoreString);
}

///// GET SCORE /////
function parseScore(){
  var retrieveScore = localStorage.getItem('userScore');
  var parsedScore = JSON.parse(retrieveScore);
  console.log(parsedScore);
}



///// Function to create array
createRiddleArray();
createAllergyArray();

//// call functions
console.log(round);
p.textContent = riddleArray[round].riddle;
questionBox.appendChild(p);
hide(nextPage);
makeButton();
btnOne.addEventListener('click', checkAnswer);
btnTwo.addEventListener('click', checkAnswer);
btnThree.addEventListener('click', checkAnswer);
btnFour.addEventListener('click', checkAnswer);







// bio's
// console.log(`you are a ${age} year old and have stumbled up a beaten down house with a big red metal door. At first you are hesistant to go in, but you notice that it is ${weather} outside. Upon entering, you recall someone before saying you are hangry, so you reach into your backpack and pull out a candy bar to munch on. Unfortunately you notice it contains ${allergy} which you are deathly allergic to. after tossing the death bar, you turn to leave rather than starve in a building and notice the door is shut and bolted locked and electrified. you now have to find a way out.....   `);








