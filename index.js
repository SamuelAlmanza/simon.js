
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
var userIndex = userClickedPattern[userClickedPattern.length - 1];
var gameIndex = gamePattern[gamePattern.length - 1];


$(document).one("keypress", function(){
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
 
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userIndex);
 })

function nextSequence(){
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);    

};


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");

    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userIndex = gameIndex) {
        console.log("Success");
    } else {
        console.log("Wrong");
    };
};