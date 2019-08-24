//start of game is false
var start = false;
//timer counter
var time = 0;


//stop game
function stopGame() {
    document.location.reload()
  }


//start time button
function startGame() {
    start = true;
//timer
if (start = true) {
    timeStart = setInterval(timer, 1000);

}

function timer() {

time++;
var converted = timeConverter(time);
console.log(converted);
$(".timer-display").text(converted);

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
// var endQuestionTimer;
// function endQuestion() {
//     setTimeout(function () {
//         ++counter;
//       }, 5000);
// }

}

//Question displays

var quizQuestions = [
{
    question: "What year did Spongebob air for the first time?",

    answers: {
        a: "2000",
        b: "1999",
        c: "2001"
    },

    correctAnswer: "1999"
},

{
    question: "What was the first episode of Spongebob",
    answers: {
      a: "Help Wanted",
      b: "Bubble Stand",
      c: "Jelly Fishing"
    },
    correctAnswer: "Help Wanted"
  },

  {
    question: "Where does Sandy Cheeks Live",
    answers: {
      a: "Under Water Hut",
      b: "Texas",
      c: "Underwater Tree Dome"
    },
    correctAnswer: "Underwater Tree Dome"
  },

  {
    question: "What instrument does Squidward play?",
    answers: {
      a: "Jazz Flute",
      b: "Saxaphone",
      c: "Claranet"
    },
    correctAnswer: "Claranet"
  },

];


function hide() {
    $(".correct-answer").hide(quizQuestions[0].correctAnswer);
}

function queue() {
quizQuestions.shift();
}
var hideAnswer = setInterval(hide, 4800);

var startQuestions = setInterval(questionQueue, 0000);
var startQueue = setInterval(queue, 5000);

  function questionQueue() {
    $(".quiz-display").text(quizQuestions[0].question);
    $("#a").text(quizQuestions[0].answers.a);
    $("#b").text(quizQuestions[0].answers.b);
    $("#c").text(quizQuestions[0].answers.c);
    $(".correct-answer").text(quizQuestions[0].correctAnswer);


    $("#a, #b, #c").click(function(){
    $(".correct-answer").show(quizQuestions[0].correctAnswer);
    if (quizQuestions[0].answers.a === quizQuestions[0].correctAnswer) {
        console.log("correct");
    } else {
        console.log("wrong");
    }

    if (quizQuestions[0].answers.b === quizQuestions[0].correctAnswer) {
        console.log("correct");
    } else {
        console.log("wrong");
    }

    if (quizQuestions[0].answers.c === quizQuestions[0].correctAnswer) {
        console.log("correct");
    } else {
        console.log("wrong");
    }

    });

}

  var endQuestions = setTimeout(endQuiz, 25000);

  function endQuiz() {

    $(".quiz-display").text("end");

  }

}//stat game function closure
