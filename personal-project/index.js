// homescreen buttons
var buttonOne = $(".firstButtons");
buttonOne.on('click', hideButtons);

function hideButtons() {
  buttonOne.css("display", "none");
}

// to show the sweet buttons
var buttonTwo = $(".sweetButtons");
var initSweet = $("#sweetInit");

initSweet.on('click', showButtonsSweet);

function showButtonsSweet() {
  buttonTwo.css("display", "initial");
}

// to show the savory buttons
var buttonThree = $(".savoryButtons");
var initSavory = $("#savoryInit");

initSavory.on('click', showButtonsSavory);

function showButtonsSavory() {
  buttonThree.css("display", "initial");
}

// to show the beverage buttons
var buttonFour = $(".beverageButtons");
var initBeverage = $("#beverageInit");

initBeverage.on('click', showButtonsBeverages);

function showButtonsBeverages() {
  buttonFour.css("display", "initial");
}
