
'use scrict';


///////// Attempt to make the code DRY///////////

//////////////////////// Global Arrays /////////////////////////

//// Global Array for the traits and questions////
var riddleArray = [];
var riddleIndexArray = [];
var btnOne = document.createElement('button');
var btnTwo = document.createElement('button');
var btnThree = document.createElement('button');
var btnFour = document.createElement('button');
var questionBox = document.getElementById('question');
var round = 0;
var count = 0;
var hideContainer = document.getElementById('container');

var clueArray = ['a','b','c','d','e','f'];



function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Creating the Riddle questions
function Riddle (riddle,reply,choiceOne,choiceTwo, choiceThree, choiceFour) {
  this.riddle = riddle;
  this.reply = reply;
  this.choiceOne = choiceOne; ///choice
  this.choiceTwo = choiceTwo; //choices
  this.choiceThree = choiceThree;
  this.choiceFour = choiceFour;
  riddleArray.push(this);
}

// hide function
function hide(elem) {
  elem.style.display = 'none';
};

//show function
function show(elem) {
  elem.style.display = 'block';
};


// next question button
function nextQuestion(){
  hide(answer);
  hide(p);
  round++;
  hide(btnOne);
  hide(btnTwo);
  hide(btnThree);
  hide(btnFour);
  makeButton();
  makeQuestion();
  btnOne.addEventListener('click', checkAnswer);
  btnTwo.addEventListener('click', checkAnswer);
  btnThree.addEventListener('click', checkAnswer);
  btnFour.addEventListener('click', checkAnswer);
}

// Append Riddle
var p = document.createElement('p');
function makeQuestion(){
  p = document.createElement('p');
  p.textContent = riddleArray[round].riddle;
  questionBox.appendChild(p);
}

// make button
function makeButton() {
  btnOne = document.createElement('button');
  btnOne.textContent = riddleArray[round].choiceOne;
  hideContainer.appendChild(btnOne);

  btnTwo = document.createElement('button');
  btnTwo.textContent = riddleArray[round].choiceTwo;
  hideContainer.appendChild(btnTwo);

  btnThree = document.createElement('button');
  btnThree.textContent = riddleArray[round].choiceThree;
  hideContainer.appendChild(btnThree);

  btnFour = document.createElement('button');
  btnFour.textContent = riddleArray[round].choiceFour;
  hideContainer.appendChild(btnFour);
}


function checkAnswer(event) {
  event.preventDefault();
  var button = event.target.textContent;
  console.log(button);
  if (button === riddleArray[round].reply) {
    document.getElementById('answer').innerHTML = `That's right! ${clueArray[count]}`;
    show(answer);
    count++;
  }
  else (
    document.getElementById('answer').innerHTML = 'Thats wrong!!');
}

function createRiddleArray () {
  new Riddle ('You can drop me from the tallest building and I will be fine, but if you drop me in water I die. What am I?', 'paper','rock','scissor', 'feather', 'paper');
  new Riddle ('What has a head and a tail, but no body?','coin','tadpole','snake','coin','music notes');
  new Riddle ('What has an eye but can not see?','needle','eyeglasses','');
  new Riddle ('What gets wetter and wetter the more it dries?','towel');
  new Riddle ('Your height is six feet, you are an assistant at a butcher shop, and you wear size 9 shoes. What do you weigh in pounds?', 'meat');
  new Riddle ('There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it?','watermelon');
  // new Riddle ('What kind of room has no doors or windows?','mushroom');
  // new Riddle ('What kind of tree can you carry in your hand?','palm');
  // new Riddle ('Which word in the dictionary is spelled incorrectly?','incorrectly');
  // new Riddle ('Which creature walks on four legs first, two legs later, and three legs before it dies?','man');
  // new Riddle ('If you have me, you want to share me. If you share me, you have not got me. What am I?','secret');
  // new Riddle('What gets broken without being held?','promise');
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
createRiddleArray();
console.log(round);
p.textContent = riddleArray[round].riddle;
questionBox.appendChild(p);
makeButton();
btnOne.addEventListener('click', checkAnswer);
btnTwo.addEventListener('click', checkAnswer);
btnThree.addEventListener('click', checkAnswer);
btnFour.addEventListener('click', checkAnswer);

































///// Global Arrays /////
// var ageArray = [5,10,15,20,35,50,80];
// var allergyArray = ['shellfish', 'peanuts', 'dairy', 'soy'];
// var weatherArray = ['sunny', 'snowing', 'raining'];


// random traits generator
// random age

// var ageIndex = Math.floor(Math.random() * ageArray.length);
// var age = ageArray[ageIndex];
// console.log(age.ans)
// console.log(age)
// random allergy
// var allergy = allergyArray[Math.floor(Math.random() * allergyArray.length)];
// random weather
// var weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

// var player = new Object();
// player.age = age;
// player.allergy = allergy;
// player.weather = weather;

// console.log(player);

// var questionArray = [{
//   question: 'There\'s a ${allergy} on the table! Do you eat it?',
//   answer: 'nilk'
// },
// {
//   question: 'You are SO bored and have been stuck here for HOURS! You see a bottle of rum to help pass the time. Do you drink it?',
//   answer: 21
// },
// { question: 'You are almost out! You see a cool looking jacket by the door, should you wear it?',
//   answer: 'raining' }
// ];
// console.log(questionArray)

// bio's
// console.log(`you are a ${age} year old and have stumbled up a beaten down house with a big red metal door. At first you are hesistant to go in, but you notice that it is ${weather} outside. Upon entering, you recall someone before saying you are hangry, so you reach into your backpack and pull out a candy bar to munch on. Unfortunately you notice it contains ${allergy} which you are deathly allergic to. after tossing the death bar, you turn to leave rather than starve in a building and notice the door is shut and bolted locked and electrified. you now have to find a way out.....   `);

// // questions
// console.log(`theres food on the ground and it has ${allergy}, Do you eat it?`);

// console.log(age);
// console.log(weather);
// console.log(allergy);

///// Global Functions /////

/////Global Variable ////
// var click = 0;

///// Questions aopending to page /////

// var p = document.createElement('p');

// function makeQuestions() {
//   var gamePage = document.getElementById('questions');
//   p = document.createElement('p');
//   p.textContent = questionArray[click].question;
//   gamePage.appendChild(p);
// }
// makeQuestions();

// ///// HIDE FUNCTION /////
// function hide(elem) {
//   elem.style.display = 'none';
// }


// ////////////asdffdflhdsfakjlsf//////
// function checkingPlayer() {
//   var selected = document.querySelector('input[name = "answer"]:checked').value;
// }



// console.log(form);

// function checkAnswer() {
//   event.preventDefault();
//   var button = event.target.value;
// var ele = document.getElementsByName('answer').value;
// var selected = document.querySelector('input[name = "answer"]').value;
// selected = questionArray[1].answer;
// console.log(button);
// if (button === 'yes') {
//   button = questionArray[click].answer;
// }

// console.log(button);

// var dead = 'you are dead';

// if (button > player.age) {
//   alert(dead)
//   click++;
// } else if (button === player.allergy) {
//   alert(dead)
//   click++;
// } else if (button === player.weather){
//   alert(dead)
//   click++;
// } else {
//   click++;
//   hide(p);
//   makeQuestions();
// }

// console.log(ele);
// console.log(typeof(questionArray[1].type));
// console.log(ele[i].checked);
// for (var i = 0; i < ele.length; i++) {
//   if (ele[i].checked === age.ans) {
//     alert('Well done!');
//     click++;
//     hide(p);
//     makeQuestions();
//     break;
//   }
//   else {
//     alert('You lose!');
//     click++;
//     hide(p);
//     makeQuestions();
//     break;
//   }
// }
// }


// console.log(ageArray[1].age)
// form.eventListener('submit', checkAnswer);
