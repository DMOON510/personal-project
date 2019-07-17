// var buttonOne = $(".firstButtons");
//
// buttonOne.on('click', hideButtons);
//
// function hideButtons() {
//     // button.toggleClass('firstButtons');
//     buttonOne.css("display", "none");
// }
//
// var sweet = $(".sweetButtons")
// function hideSbuttons() {
//   buttonTwo.css("display","none");
// }
//  console.log("hello")

var buttonOne = $(".firstButtons");
buttonOne.on('click', hideButtons);

function hideButtons() {
    buttonOne.css("display", "none");
}

var buttonTwo = $(".sweetButtons");

function showButtons() {
  buttonTwo.toggleClass('.hide');
}
