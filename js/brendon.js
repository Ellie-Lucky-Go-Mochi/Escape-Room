

///////// Attempt to make the code DRY///////////

//////////////////////// Global Arrays /////////////////////////

//// Global Array for the traits and questions////
var riddleArray = [];
var riddleIndexArray = [];
var btnOne = document.getElementById('button1');
var btnTwo = document.getElementById('button2');
var btnThree = document.getElementById('button3');
var btnFour = document.getElementById('button4');

var hideContainer = document.getElementById('container');

// function Geeks() {
//   var myDiv = document.getElementById('GFG');

//   // creating button element
//   var button = document.createElement('BUTTON');

//   // creating text to be
//   //displayed on button
//   var text = document.createTextNode('Button');

//   // appending text to button
//   button.appendChild(text);

//   // appending button to div
//   myDiv.appendChild(button);
// }

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Creating the Riddle questions
function Riddle (riddle,reply) {
  this.riddle = riddle;
  this.reply = reply;
  riddleArray.push(this);
}

// hide function
function hide(elem) {
  elem.style.display = 'none';
}

// next question button
function nextQuestion(){
  hide(hideContainer);
}

function checkAnswer() {
  event.preventDefault();
  var button = event.target.value;
  console.log(button);
  if (button === 'yes') {
    document.getElementById('answer').innerHTML = 'Thats Right!!';

  }
  else (
    document.getElementById('answer').innerHTML = 'Thats wrong!!');
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
createRiddleArray();
console.log(riddleArray);
document.getElementById('question').innerHTML = riddleArray[0].riddle;
