'use scrict';

///// Global Arrays /////
var ageArray = [{age: 5, ans: 'N'}, {age: 10,ans: 'N'}, {age: 15,ans: 'N'}, {age: 20,ans: 'N'}, {age: 40,ans: 'Y'}, {age: 80,ans: 'Y'}];
// var allergyArray = ["shellfish", "peanuts", "dairy", "soy"];
// var weatherArray = ["sunny", "snowing", "raining"];

// random traits generator
// random age 
// var age = ageArray[Math.floor(Math.random() * ageArray.length)];
// // random allergy
// var allergy = allergyArray[Math.floor(Math.random() * allergyArray.length)];
// // random weather
// var weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

// // bio's
// console.log(`you are a ${age} year old and have stumbled up a beaten down house with a big red metal door. At first you are hesistant to go in, but you notice that it is ${weather} outside. Upon entering, you recall someone before saying you are hangry, so you reach into your backpack and pull out a candy bar to munch on. Unfortunately you notice it contains ${allergy} which you are deathly allergic to. after tossing the death bar, you turn to leave rather than starve in a building and notice the door is shut and bolted locked and electrified. you now have to find a way out.....   `);

// // questions
// console.log(`theres food on the ground and it has ${allergy}, Do you eat it?`);

// console.log(age);
// console.log(weather);
// console.log(allergy);


////////////////////////// Vij's functions////////////
// global text question
var index = Math.floor(Math.random() * ageArray.length);
var age = ageArray[index].age;
var questionArray = [
  'Will you drink from this bottle?'
]
var userAnswer = [];

for (var i = 0; i<questionArray.length; i++){
  console.log('this is your age:',age,questionArray[i]);
  var answer = prompt ('what is your answer');
  userAnswer.push(answer);cod
}

// for (var k=0; k<questionArray.length; k++){
if (ageArray[index].ans === userAnswer[0]) {
  alert('WellDone');
} else {
  alert ('Too Bad!');
}
// }


