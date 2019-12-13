'use scrict';

///// Global Arrays /////
var ageArray = [{ age: 5, ans: 'N' }, { age: 10, ans: 'N' }, { age: 15, ans: 'N' }, { age: 20, ans: 'N' }, { age: 40, ans: 'Y' }, { age: 80, ans: 'Y' }];
var allergyArray = ['shellfish', 'peanuts', 'dairy', 'soy'];
var weatherArray = ['sunny', 'snowing', 'raining'];

// random traits generator
// random age
var ageIndex = Math.floor(Math.random() * ageArray.length);
var age = ageArray[ageIndex].age;
// random allergy
var allergy = allergyArray[Math.floor(Math.random() * allergyArray.length)];
// random weather
var weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

var questionArray = ['There\'s a snickers on the table! Do you eat it?', 'You are SO bored and have been stuck here for HOURS! You see a bottle of rum to help pass the time. Do you drink it?', 'You are almost out! You see a cool looking jacket by the door, should you wear it?'];

// bio's
// console.log(`you are a ${age} year old and have stumbled up a beaten down house with a big red metal door. At first you are hesistant to go in, but you notice that it is ${weather} outside. Upon entering, you recall someone before saying you are hangry, so you reach into your backpack and pull out a candy bar to munch on. Unfortunately you notice it contains ${allergy} which you are deathly allergic to. after tossing the death bar, you turn to leave rather than starve in a building and notice the door is shut and bolted locked and electrified. you now have to find a way out.....   `);

// // questions
// console.log(`theres food on the ground and it has ${allergy}, Do you eat it?`);

// console.log(age);
// console.log(weather);
// console.log(allergy);

///// Global Functions /////

/////Global Variable ////
var click = 0;

///// Questions aopending to page /////

var p = document.createElement('p');

function makeQuestions() {
  var gamePage = document.getElementById('questions');
  p = document.createElement('p');
  p.textContent = questionArray[click]
  gamePage.appendChild(p); 
}
makeQuestions();

///// HIDE FUNCTION /////
function hide(elem) {
  elem.style.display = 'none';
}

function checkAnswer() {
  var ele = document.getElementsByName('answer');
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked === true) {
      alert('Well done!');
      click++;
      hide(p);
      makeQuestions();
      break;
    }
    else if (ele[i].checked === false) {
      alert('You lose!');
      click++;
      hide(p);
      makeQuestions();
      break;
    }
  }
}