// homescreen buttons
var buttonOne = $(".firstButtons");
var buttonTwo = $(".sweetButtons");
var buttonThree = $(".savoryButtons");
var buttonFour = $(".beverageButtons");
var sweetInitial = $(".sweet");
var savoryInitial = $(".savory");
var beveragesInitial = $(".beverages");

buttonOne.on('click', hideButtons);

function hideButtons() {
  buttonOne.css("display", "none");
}

sweetInitial.on ('click', showSweet);

function showSweet () {
  buttonTwo.css("display", "initial");
}

savoryInitial.on ('click', showSavory);

function showSavory () {
  buttonThree.css("display", "block");
}

beveragesInitial.on ('click', showBeverages);

function showBeverages () {
  buttonFour.css("display", "initial");
}

// this is the random generator part
var webSite = $('#myIframe');
var buttons = $('.allButtons');
var image = $('img')
var indButtons = $('button');
var cakeButton = $('.cake');
cakeButton.on('click', showCakeRecipe);

function showCakeRecipe() {
  var linksCake = ["https://www.tablespoon.com/recipes/shortcut-tiramisu-sheet-cake/5e39450d-bbd9-4c5b-82ad-5d429bb2e564", "https://www.tablespoon.com/recipes/banana-pudding-poke-cake/28b449b6-05ac-4bed-9440-bcd934b7ddfc", "https://www.tablespoon.com/recipes/upside-down-skillet-grilled-peach-cake/a4163b56-4426-44d4-b322-336b63cd42a2"];
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksCake[Math.floor(Math.random() * linksCake.length)]
}

var cookiesButton = $('.cookies');
cookiesButton.on('click', showCookieRecipe);

function showCookieRecipe () {
  var linksCookie = ["https://www.tablespoon.com/recipes/5-ingredient-peanut-butter-chocolate-chip-cookies/26e085da-b54e-40b8-a6b9-c4f37af2847d", "https://www.tablespoon.com/recipes/copycat-girl-scout-samoas/d5b095d5-2dc1-49c7-89c7-576a36c86295", "https://www.tablespoon.com/recipes/copycat-panera-kitchen-sink-cookies/9242e80e-8a83-4c61-9464-75a7ace4acd8"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksCookie[Math.floor(Math.random() * linksCookie.length)]
}

var pastriesButton = $('.pastries');
pastriesButton.on('click', showPastriesRecipe);

function showPastriesRecipe () {
  var linksPastries = ["https://www.tablespoon.com/recipes/grilled-toaster-strudel-strawberry-shortcake/d60b3df3-b36a-431d-9213-47e1a658a743", "https://www.tablespoon.com/recipes/raspberry-habanero-baked-brie/b8a658c0-ccfd-4ccd-9c35-45654629bfd7", "https://www.tablespoon.com/recipes/brie-and-cherry-pastry-cups/43940350-b32d-4d06-bbee-5f77938a2ddd"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksPastries[Math.floor(Math.random() * linksPastries.length)]
}

var pizzaButton = $('.pizza')
pizzaButton.on('click', showPizzaRecipe);

function showPizzaRecipe(){
  var linksPizza = ["https://www.tablespoon.com/recipes/copycat-pizza-hut-bigfoot-pizza/2d3a40d2-144f-40b8-b0ff-6323663b57a8", "https://www.tablespoon.com/recipes/pizza-roll-stuffed-crust-pizza/db911df3-2006-4674-aa76-619d5cd4244f", "https://www.tablespoon.com/recipes/pizza-rolls/92c71061-a22c-4521-b2f6-9989a9486765"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksPizza[Math.floor(Math.random() * linksPizza.length)]
}

var chickenButton  = $('.chicken');
chickenButton.on ('click', showChickenRecipe);

function showChickenRecipe() {
  var linksChicken = ["https://www.tablespoon.com/recipes/bourbon-barbecue-chicken-breasts/a23039bf-e4f4-414c-a58a-a2864a88658f", "https://www.tablespoon.com/recipes/bacon-ranch-chicken-breasts/0652689d-9ddf-4306-b8f9-0ac24d57997b", "https://www.tablespoon.com/recipes/cashew-chicken/8cc67caf-3f4a-4e0b-b85f-d8d4235bac8c"];
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksChicken[Math.floor(Math.random() * linksChicken.length)]
}

var pastaButton = $('.pasta');
pastaButton.on ('click', showPastaRecipe);

function showPastaRecipe() {
  var linksPasta = ["https://www.tablespoon.com/recipes/mexican-chicken-pasta-bake/f6b45196-f850-4a39-82d2-c7c24378e927", "https://www.tablespoon.com/recipes/beef-cannelloni/15f03c1d-0893-4b47-9992-35717c36bf12", "https://www.tablespoon.com/recipes/four-cheese-pasta-bake/ccaa2f8b-b392-4245-9cc7-f20388003278"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksPasta[Math.floor(Math.random() * linksPasta.length)]
}
var coffeeButton  = $('.coffee');
coffeeButton.on ('click', showCoffeeRecipe);

function showCoffeeRecipe() {
  var linksCoffee = ["https://www.tablespoon.com/recipes/mocha-coffee-frappe/2c1d435c-f408-43b9-b467-06b6709de282", "https://www.tablespoon.com/recipes/classic-irish-coffee/c15e23d1-1688-4a2e-bbf7-d53dee01522c", "https://www.tablespoon.com/recipes/mexican-coffee/a3dd4e9c-6b9c-46c7-9c0c-25a1ac063f75"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksCoffee[Math.floor(Math.random() * linksCoffee.length)]
}
var teaButton = $('.tea');
teaButton.on('click', showTeaRecipe);

function showTeaRecipe(){
  var linksTea = ["https://www.tablespoon.com/recipes/sparkling-raspberry-tea/52f96a4f-847c-4f8a-ab83-b02b13161734", "https://www.tablespoon.com/recipes/frosty-raspberry-iced-tea/3adaa871-e1b1-45f2-af31-ea4b179290f7", "https://www.tablespoon.com/recipes/lemon-tea-slush/67955a9b-517c-40f0-bb20-ed1a12642a06"]
  webSite.css("display", "initial");
  buttons.css("margin-top", "0px");
  indButtons.css("height", "90px");
  indButtons.css("width", "100px");
  image.css("height", "50px")
  document.getElementById('myIframe').src = linksTea[Math.floor(Math.random() * linksTea.length)]
}

//to do list
var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createName);
$('.card-container').on
("click", ".delete-btn", deleteItem)

function createName() {
  var name = $('.name').val();

  appendRecipe(name);
  clearInputs();

}

function appendRecipe(name) {
  cardContainer.append(`
    <div class="name-card">
    <p>${name} is a great recipe!</p>
    <button class="delete-btn">X</button>
    </div>`);
}
function clearInputs() {
  $('.name').val("");
}

function deleteItem(event) {
  event.target.parentNode.remove()

}
$('.name').val("");
