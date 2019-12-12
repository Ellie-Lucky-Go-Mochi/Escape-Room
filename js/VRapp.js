'use strict';

///////// Attempt to make the code DRY///////////

// Global Arrays //
var ageArray = [];
var allergyArray = [];
var weatherArray = [];
var score = 0;

//////Object construction for all six questions //
// Creating the Age trait array
function Age (age,drink) {
  this.age = age;
  this.ans = drink;
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

function Riddle (riddle,reply) {
  
}





// Calling functions

//// Generate all the Arrays on page load
function createOnPageLoad() {
  createAgeArray();
  createAllergyArray();
  createWeatherArray();
}

createOnPageLoad();
