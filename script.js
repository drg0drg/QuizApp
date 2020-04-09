

// -------------------------------------------//
// ------------PSEUDOCODE QUIZ APP------------//
// -------------------------------------------//



// Create sets of Q+A          DONE (on questions.js)
// These sets are objects with keys and values
// Designate the correct answer. This will be compared later to the user input
// These objects form an array of Q/A sets
// Create timer countdown  DONE
// Set the timer at a specific value  DONE
// By an addEventListener, start the timer when <play> button is pressed DONE
// By an addEventListener, stop the timer when <stop> button is pressed
// Create a function that runs through the QA array and display each set
// Add this function in the same addEventListener for the <play> button
// Create compare function that compares the user input to the correct answer
// Inside this function, create if/else loop -> if userIn===correctAnswer than increase score, else decrease time
// Create function to stop the game
// Inside this function, create if loop -> if timer=0 || no questions left than stop game







let questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choice1: "<script>",
      choice2: "<javascript>",
      choice3: "<head>",
      choice4: "<section>",
      answer: 1
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " When was C++ created by Bjarne Stroustrup, the Danish computer scientist?",
      choice1: "1878",
      choice2: "1973",
      choice3: "2015",
      choice4: "1983",
      answer: 4
    },
    {
        question: "What is <addEventListener> in JS ?",
        choice1: "a string",
        choice2: "a method", 
        choice3: "a variable", 
        choice4: "un pain au chocolat",
        answer: 2
    }
  ];







// VARIABLES

var timerValEl = document.getElementById("tm-val");
var scoreValEl = document.getElementById("sc-val");
var startBtn = document.getElementById("play");
var stopBtn = document.getElementById("stop");
var nextBtn = document.getElementById("next");
var scoretBtn = document.getElementById("score");
var questionEl = document.getElementById("q-box");
var option1 = document.getElementById("A1");
var option2 = document.getElementById("A2");
var option3 = document.getElementById("A3");
var option4 = document.getElementById("A4");
// var questionsArr = questions;




let timerValShown = 5;
let scoreValShown = 0;
var timerInterval;
var timerVAL;
var localQuestion;
var qIndex;


// this is only to be able to display the timerValShown when the page loads
timerValEl.textContent = timerValShown;
// this is only to be able to display the scoreValShown when the page loads
scoreValEl.textContent = scoreValShown;







// Adding the EventListener to start button to launch timer function
// Inside EventListener is the function <timer> which uses the method setInterval
// setInterval method has two parameters, (function, interval). The interval is in milliseconds, hence the second argument is <1000>
startBtn.addEventListener("click", function timer(){
    let timerVAL = setInterval(function (){
        timerValEl.textContent = timerValShown;
        // timerValShown--    -->>  if this is here, timer stops at 1 instead of 0;
        if(timerValShown === 0) {
            clearInterval(timerVAL);
        }
        timerValShown--;
    }, 1000);
    loadQuestion();

});




// Stop button functionality
// stopBtn.addEventListener("click", function () {
//     console.log("button works but doesn't work")
//     clearInterval(timerVAL);
// });





// Creating a function that loads the first question when play pressed

function loadQuestion (qIndex){
    // document.getElementById("play").disabled = true;
    qIndex=0;
    var localQuestion = questions[qIndex];
    questionEl.textContent = localQuestion.question;
    option1.textContent = localQuestion.choice1;
    option2.textContent = localQuestion.choice2;
    option3.textContent = localQuestion.choice3;
    option4.textContent = localQuestion.choice4;
};






// function loadQuestion(){
//     var localQuestion = questions[questionIndex];
//     var answerPoss = document.getElementsByTagName("label");
//     for (var i=0; i< answerPoss.length; i++) {
//         answerPoss[i].textContent = questions[answerPoss[i].id]

//     }
// }





// function loadNextQuestion(){
//     var userChoice = document.querySelector('input[type=radio]:checked');
//     if(!userChoice){
//         alert("Please select answer.");
//         return;
//     }
//     var answer = userChoice.value;
//     if(questions[currentQuestion].answer === answer){
//         score += 1;
//     }
//     userChoice.checked = false;
//     currentQuestion++;
//     if (currentQuestion == totquestions){
//         startBtn.style.visibility='hidden';
//         nextBtn.style.visibility='hidden';
//         quizContainer.style.display="none";
//         result.style.display="";
//         result.textContent = score;
//         return;
//     }
//     loadQuestion(currentQuestion);
// }
