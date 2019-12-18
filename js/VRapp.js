'use strict';

///////// Attempt to make the code DRY///////////

//////////////////////// Global Arrays /////////////////////////

//// Global Array for the traits and questions////
var ageArray = [];
var allergyArray = [];
var weatherArray = [];
var riddleArray = [];
var ageIndexArray = [];
var allergyIndexArray = [];
var weatherIndexArray = [];
var riddleIndexArray = [];
var score = 0;

//// global arrays for the timer///
//set minutes//
var mins = 2;

/////////////////////////////CREATING ALL THE ARRAYS ///////////////
//////Object construction for all six questions //
// Creating the Age trait array
function Age (age,drink) {
  this.age = age;
  this.ans = drink;
  // this.indexArray = [];
  ageArray.push(this);
}

function createAgeArray() {
  new Age (16, 'N');
  new Age (20, 'N');
  new Age (25, 'Y');
  new Age (40, 'Y');
  new Age (55, 'Y');
  new Age (80, 'Y');
}

// Creating the Allergy trait array
function Allergy (allergy, eatable, eat) {
  this.allergy = allergy;
  this.eatable = eatable;
  this.eat = eat;
  allergyArray.push(this);
}

function createAllergyArray() {
  new Allergy ('shellfish', 'sushi', 'N');
  new Allergy ('peanuts', 'fresh rolls with peanut sauce','N');
  new Allergy ('dairy', 'icecream', 'N');
  new Allergy ('soy', 'sushi with sauce on it', 'N');
  new Allergy ('fava beans', 'asparagus and favabean salad', 'N');
  new Allergy ('shellfish', 'salmon cookies', 'Y');
  new Allergy ('peanuts', 'pecan pie', 'Y');
  new Allergy ('dairy', 'vegan pie','Y');
  new Allergy ('soy', 'chickpea and rice', 'Y');
  new Allergy ('fava beans', 'edamame', 'Y' );
}

// Creating the Age trait array
function Weather (weather, outfit, wear) {
  this.weather = weather;
  this.outfit = outfit;
  this.wear = wear;
  weatherArray.push(this);
}

function createWeatherArray() {
  new Weather ('hot', 'full sleeved shirt', 'Y');
  new Weather ('warm', 'tank top', 'Y');
  new Weather ('slightly wet', 'light rain jacket', 'Y');
  new Weather ('really wet', 'jacket and boots', 'Y');
  new Weather ('freezing', 'gloves and scarf', 'Y' );
  new Weather ('sunny', 'full sleeved shirt', 'Y' );
  new Weather ('hot', 'jeans', 'N' );
  new Weather ('warm', 'gloves and scarf', 'N' );
  new Weather ('slightly wet', 'ski boots', 'N' );
  new Weather ('really wet', 'tank top', 'N' );
  new Weather ('freezing', 'sun hat', 'N' );
  new Weather ('sunny', 'jacket and boots', 'N');
}

// Creating the Riddle questions
function Riddle (riddle,reply) {
  this.riddle = riddle;
  this.reply = reply;
  riddleArray.push(this);
}

function createRiddleArray () {
  new Riddle ('You can drop me from the tallest building and I will be fine, but if you drop me in water I die. What am I?', 'paper');
  new Riddle ('What has a head and a tail, but no body?','coin');
  new Riddle ('What has an eye but can not see?','needle');
  new Riddle ('What gets wetter and wetter the more it dries?','towel');
  new Riddle ('Your height is six feet, you are an assistant at a butcher shop, and you wear size 9 shoes. What do you weigh in pounds?', 'meat');
  new Riddle ('There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it?','watermelon');
  new Riddle ('What kind of room has no doors or windows?','mushroom');
  new Riddle ('What kind of tree can you carry in your hand?','palm');
  new Riddle ('Which word in the dictionary is spelled incorrectly?','incorrectly');
  new Riddle ('Which creature walks on four legs first, two legs later, and three legs before it dies?','man');
  new Riddle ('If you have me, you want to share me. If you share me, you have not got me. What am I?','secret');
  new Riddle('What gets broken without being held?','promise');
  new Riddle('Feed me and I live, yet give me a drink and I die. What am I?','fire');
  new Riddle('A person is pushing his car outside along the road when he comes to a nearby hotel and shouts, "I am bankrupt!" What is he up to?','he is playing monopoly');
  new Riddle('What do the poor have in plenty, the rich need it, and if you eat it, you will die?','nothing');
  new Riddle('Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?','coffin');
  new Riddle('What can travel around the world while staying in a corner?','stamp');
  new Riddle('I am tall when I am young and I am short when I am old. What am I?','candle');
  new Riddle('What has hands but never clap','clock');
  new Riddle('Forward I am heavy, but backward I am not. What am I?','ton');
  new Riddle('I have married many women, but am a bachelor. Who am I?','priest');
  new Riddle('With my help you can look through walls. What am I?','window');
  new Riddle('If you take off my skin, I will make you cry! What am I?','onion');
  new Riddle('What is at the end of a rainbow?','letter w');
  new Riddle('What is as light as a feather, but no one can hold it for more than a minute?','breath');
  new Riddle('Which weighs more, a pound of feathers or a pound of bricks?','Neither');
  new Riddle('What occurs once in every minute, twice in every moment, yet never in a thousand years?', 'letter m');
  new Riddle('What has a neck but no head?','bottle');
  new Riddle('Voiceless it cries, wingless flutters, toothless bites, mouthless mutters. What am I?','wind');
  new Riddle('Alive without breath, as cold as death, never thirsty, ever drinking, all in mail never clinking.','fish');
  new Riddle('A box without hinges, key, or lid,yet golden treasure inside is hid. What is it?','egg');
  new Riddle('Tear one off and scratch my head what was red is black instead. What am I?','matchstick');
  new Riddle('What is always on its way but never arrives?','tomorrow');
  new Riddle('What kills by drowning but is never wet?','quicksand');
  new Riddle('What goes up but never comes down?','age');

}
//////////////////////////////////////////////////////////////////


////////////////////////////////////Generating Random Numbers////////
//Unique Random functions
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function uniqueRandomAgeNumber(){
  var randomAgeIndex = randomIndex(ageArray.length);
  while(ageIndexArray.includes(randomAgeIndex)){
    randomAgeIndex = randomIndex(ageArray.length);
  }
  ageIndexArray.push(randomAgeIndex);
  if (ageIndexArray.length === 3) {
    ageIndexArray.shift();
  }
  console.log('this is the ageIndexArray', ageIndexArray);
}

function uniqueRandomWeatherNumber(){
  var randomWeatherIndex = randomIndex(weatherArray.length);
  while(weatherIndexArray.includes(randomWeatherIndex)){
    randomWeatherIndex = randomIndex(weatherArray.length);
  }
  weatherIndexArray.push(randomWeatherIndex);
  if (weatherIndexArray.length === 3) {
    weatherIndexArray.shift();
  }
  console.log('this is the weatherIndexArray', weatherIndexArray);
}

function uniqueRandomAllergyNumber(){
  var randomAllergyIndex = randomIndex(allergyArray.length);
  while(allergyIndexArray.includes(randomAllergyIndex)){
    randomAllergyIndex = randomIndex(allergyArray.length);
  }
  allergyIndexArray.push(randomAllergyIndex);
  if (allergyIndexArray.length === 3) {
    allergyIndexArray.shift();
  }
  console.log('this is the allergyIndexArray', allergyIndexArray);
}

function uniqueRandomRiddleNumber(){
  var randomRiddleIndex = randomIndex(riddleArray.length);
  while(riddleIndexArray.includes(randomRiddleIndex)){
    randomRiddleIndex = randomIndex(riddleArray.length);
  }
  riddleIndexArray.push(randomRiddleIndex);
  if (riddleIndexArray.length === 3) {
    riddleIndexArray.shift();
  }
  console.log('this is the riddleIndexArray', riddleIndexArray);
}

/////////////////////////////////////////////////////////////////

//////////////////////// CALLING FUNCTIONS //////////////////////

//// Generate all the Arrays on page load
function createOnPageLoad() {
  createAgeArray();
  createAllergyArray();
  createWeatherArray();
  createRiddleArray();
  console.table(ageArray);
  console.table(allergyArray);
  console.table(weatherArray);
  console.table(riddleArray);
}
createOnPageLoad();

// for loop to try and call random unique number functions
for (var i = 0; i < 5; i++) {
  uniqueRandomAgeNumber();
  uniqueRandomWeatherNumber();
  uniqueRandomAllergyNumber();
  uniqueRandomRiddleNumber();
}

///////////////////////TIMER ON THE PAGE////////////////////////////

//calculate the seconds//
var secs = mins * 60;

//countdown function is evoked when page is loaded //
function countdown() {
  setTimeout('Decrement()', 60);
}

//Decrement function decrement the value.
function Decrement() {
  if (document.getElementById) {
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    //if less than a minute remaining
    //Display only seconds value.
    if (seconds < 59) {
      seconds.value = secs;
    }

    //Display both minutes and seconds
    //getminutes and getseconds is used to
    //get minutes and seconds
    else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    //when less than a minute remaining
    //colour of the minutes and seconds
    //changes to red
    if (mins < 1) {
      minutes.style.color = 'red';
      seconds.style.color = 'red';
    }
    //if seconds becomes zero,
    //then page alert time up
    if (mins < 0) {
      alert('time up');
      minutes.value = 0;
      seconds.value = 0;
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout('Decrement()', 1000);
    }
  }
}

function getminutes() {
  //minutes is seconds divided by 60, rounded down
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  //take minutes remaining (as seconds) away
  //from total seconds remaining
  return secs - Math.round(mins * 60);
}

countdown();
//////////////////////////////////////////////////////////////////