'use strict';

///// GLOBAL ARRAYS /////
var parseLocalStorageArray = [];
var userArray = [];
var currentUserIndex = 0;
var currentUserScore = 0;
var topArray = [];
// var topName = '';
// var topScore = 0;

function ListofTopScores (topName, topScore) {
  this.topName = topName;
  this.topScore = topScore;
  topArray.push(this);
}



///// LOCAL STORAGE FUNCTIONS /////
///// INDEXPAGE: function LOCALSTORAGE STORE userArray /////
// function saveLocalStorageArray(){
//   var storeString = JSON.stringify(userArray);
//   localStorage.setItem('currentUser', storeString);
// }

///// INDEXPAGE: function LOCALSTORAGE RETRIEVE userArray /////
function parseLocalStorage(){
  var retrieveString = localStorage.getItem('currentUser');
  parseLocalStorageArray = JSON.parse(retrieveString);
  console.log('this is the parsed Local Storage Array = ', parseLocalStorageArray);
  return parseLocalStorageArray;
}

function retrieveUserArray () {
  parseLocalStorage();
  if (parseLocalStorageArray.length > 0) {
    currentUserIndex = parseLocalStorageArray.length - 1;
    userArray = parseLocalStorageArray;
    currentUserScore = userArray[currentUserIndex].score;
    console.log('this is the user Array', userArray);
    console.log('this is our current user', userArray[currentUserIndex].username, 'this is our current user score', currentUserScore);
  }
  else {
    userArray = [];
  }
}
function displayTopscore(){
  console.log('this is the top user array', topArray);
}


function findTopScore(){
  var topName = '';
  var topScore = 0;
  var largeIndex = userArray.length - 1;
  while(!userArray.length === 0){
    for (var i = 0; i === largeIndex; i++){
      if (userArray[largeIndex].score >= userArray[i].score){
        console.log('current user is higher');
      }
      else {
        largeIndex = i;
        console.log('this is the large index', largeIndex);
      }
    }
    topScore = userArray[largeIndex].score;
    topName = userArray[largeIndex].username;
    new ListofTopScores(topName, topScore);
    var splicedItem = userArray.splice(largeIndex,1);
    console.log('this is spliced itemn', splicedItem, 'this is the new userArray', userArray);
  }
  // topName = userArray[0].username;
  // topScore = userArray[0].topScore;
  new ListofTopScores(topName,topScore);

  displayTopscore();
}

// function findTopScore(){
//   var topName = '';
//   var topScore = 0;
//   var splicedIndex = 0;
//   var lastindex = userArray.length - 1;
//   var firstitem = new Object();

//   for (var i = 0; i<lastindex; i++) {
//     console.log(userArray[i].username, userArray[i].score);
//     if (userArray[i].score < userArray [lastindex].score) {
//       firstitem.username = userArray[i].username;
//       firstitem.score = userArray[i].score;
//       userArray.shift();
//       console.log('this is the first item', firstitem, 'this is new userArray',userArray);
//     }
//     else {

// }
// for (var j=0; j<lastindex; j++){
// console.log('this is the inside loop', lastindex);
// if (userArray[lastindex].score>userArray[i].score){
//   topScore = userArray[lastindex].score;
//   topName = userArray[lastindex].username;
//   userArray.splice(lastindex,1);
//   console.log('this is the spliced userArray', userArray);
// }
// else {
//   topScore = userArray[i].score;
//   topName = userArray[i].username;
//   userArray.splice(i,1);
//   console.log('this is the spliced userArray', userArray);
// }
// topArray.topName = topName;
// topArray.topScore = topScore;
// console.log('this is the topScore', topScore, 'this is the topName', topName);
// }
// }
// for (var i = 0; i<currentUserIndex; i++) {
//   if (userArray[currentUserIndex].score < userArray[i].score){
//     topScore = userArray[i].score;
//     topName = userArray[i].username;
//     console.log('this is the topScore', topScore, 'this is the topName', topName);
//   }
//   else {
//     topScore = userArray[currentUserIndex].score;
//     topName = userArray[currentUserIndex].username;
//     console.log('this is the topScore', topScore, 'this is the topName', topName);

//     //   new ListofTopScores(topName,topScore);
//     //   displayTopscore();
//     //   return;
//   }
// }
// new ListofTopScores (topName, topScore);

// }

//Retreive the score//
retrieveUserArray();
// Get top score
findTopScore();
