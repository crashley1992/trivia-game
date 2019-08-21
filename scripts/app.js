//start of game is false
var start = false;
//timer counter
var time = 0;
//correct counter
var correctAnswerCounter = 0;
var counter = 0;

function Questions (question, answer1, answer2, correct) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.correct = correct;
}

var q1 = new Questions ("What year did Spongebob air for the first time", 2000, 2002, 1999 );
var q2 = new Questions ("What was the first episode of Spongebob", "Bubble Stand", "Jelly Fishing", "Help Wanted");
var q3 = new Questions ("Where does Sandy Cheeks Live", "Under Water Hut", "Texas", "Under Water Treedome" );
var q4 = new Questions ("What instrument does Squidward play?", "Flute", "Saxaphone", "Claranet");

//stop game
function stopGame() {
    document.location.reload()
  }

$(".questions-game-card").hide();

//start game button
function startGame() {
    start = true;
//Need to make start screen disappear.

//makes question card appear
$("div").show(".questions-game-card");


//Timer number display
$("#timer-display").text("00:00");
//timer
if (start = true) {
    timeStart = setInterval(timer, 1000);
}
 
function timer() {

time++;
var converted = timeConverter(time);
console.log(converted);
$("#timer-display").text(converted);
//timer for when questions appear.
if (time <= 5) {
displayQuestion1();
} else if (time <= 10) {
displayQuestion2();
} else if (time <=15) {
    displayQuestion3();
} else if (time <= 20) {
    displayQuestion4();
} else {
    console.log(endofTriva() + "Time is up");
}

function timeConverter(i) {
var minutes = Math.floor(i / 60);
var seconds = i - (minutes * 60);

if (seconds < 10) {
    seconds = "0" + seconds;
}

if (minutes === 0 ) {
    minutes = "00";
}

else if (minutes < 10 ) {
    minutes = "0" + minutes;
}

return minutes + ":" + seconds;
}
 
//create time out for question, going to timeout regarldess
var endQuestionTimer;
function endQuestion() {
    setTimeout(function () {
        ++counter;
      }, 5000);
}

//Check if selected answer is correct
function displayQuestion1() {
        $("#question-display").text(q1.question);
        $("#answers1").text(q1.answer1)
        $("#answers2").text(q1.correct).click(function(){
            correctAnswer1();
            correctAnswerCounter++;

        });
        $("#answers3").text(q1.answer2);
    }

function displayQuestion2() {
    $("#question-display").text(q2.question);
    $("#answers1").text(q2.correct).click(function(){
        correctAnswer2();
        correctAnswerCounter++;

    });
    $("#answers2").text(q2.answer1);
    $("#answers3").text(q2.answer2);
}

function displayQuestion3() {
    $("#question-display").text(q3.question);
    $("#answers1").text(q3.answer1);
    $("#answers2").text(q3.answer2);
    $("#answers3").text(q3.correct).click(function(){
        correctAnswer3();
        correctAnswerCounter++;

    });
}

function displayQuestion4() {
    $("#question-display").text(q4.question);
    $("#answers1").text(q4.answer1);
    $("#answers2").text(q4.correct).click(function(){
        correctAnswer4();
        correctAnswerCounter++;
    });
    $("#answers3").text(q4.answer2);
}

function endofTriva() {
    var wrongAnswerCounter = 4 - correctAnswerCounter;
}

//if answer is wrong display correct answer, blank
//answers should also be marked wrong


//if answer is correct display that it was correct
function correctAnswer1() {
    $("#answers2").text("Correct")
    $( "#img1" ).show( "slow" );
}

function correctAnswer2() {
    $("#answers1").text("Correct");
}

function correctAnswer3() {
    $("#answers3").text("Correct");
}

function correctAnswer4() {
    $("#answers4").text("Correct");
}

console.log(correctAnswerCounter);
//final screen shows number of correct answers and incorrect





//option to restart the game

} //end of startGame()
}
