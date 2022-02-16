// const buttonColours = ["red", "blue", "green", "yellow"];

// let gamePattern = []

// let nextSequence = ()=>{
//     let randomNumber =  Math.round(Math.random() * 3)
//     const randomChosenColour =  buttonColours[randomNumber]
//     gamePattern.push(randomChosenColour)
//     $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     let audio =  new Audio(`./sounds/${randomChosenColour}.mp3`)

//     audio.play().then(console.log(randomChosenColour))

// }

// $('body').keydown(function (e) {
//    nextSequence()
// });

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// has started or not

let started = false;

// score
let level = 0;

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);

  // audio playing
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  // add fade in out effects
  $("#" + userChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  if (gamePattern[0] == userClickedPattern[0]) {
    console.log("true");
    level++;
    gamePattern = [];
    userClickedPattern = [];
    setTimeout(nextSequence, 1000);
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").html(`Game over! to sart press any key`);
    $("body").css('background-color','red').fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;
    console.log(false);
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('body').css('background-color',"#011F3F")

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  $("#level-title").html(`Level ${level}`);
}

$("body").keydown((e) => {
  if (started == false) {
    nextSequence();
    started = true;
  }
});
