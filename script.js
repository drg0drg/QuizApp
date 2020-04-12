

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


// const qArray = [
// 	{
// 		question: "What does CSS stand for?",
// 		answers: [
// 			{ text1: "Creative Style Sheet", correct: false },
// 			{ text2: "Sheet", correct: false },
// 			{ text3: "Cascading Style Sheet", correct: true },
// 			{ text4: "Consortium of Style Systems", correct: false },
// 		]
// 	},
// 	{
// 		question:
//         " When was C++ created by Bjarne Stroustrup, the Danish computer scientist?",
// 		answers: [
// 			{ text1: "1878", correct: false },
// 			{ text2: "1973", correct: false },
// 			{ text3: "2015", correct: false },
// 			{ text4: "1983", correct: true },
// 		],
// 	},
// 	{
// 		question: "What is <addEventListener> in JS ?",
// 		answers: [
// 			{ text1: "a string", correct: false },
// 			{ text2: "a method", correct: true },
// 			{ text3: "a variable", correct: false },
// 			{ text4: "un pain au chocolat", correct: false },
// 		],
// 	},
// 	{
// 		question: "What is JQuery ?",
// 		answers: [
// 			{ text1: "CSS", correct: false },
// 			{ text2: "a method", correct: false },
// 			{ text3: "a framework", correct: true },
// 			{ text4: "a question", correct: false },
// 		],
//     },
//     {
// 		question: "Where was MySQL developed in 1995, before being aquired by Oracle?",
// 		answers: [
// 			{ text1: "SUA", correct: false },
// 			{ text2: "Sweden", correct: true },
// 			{ text3: "UK", correct: false },
// 			{ text4: "Hong Kong", correct: false },
// 		],
// 	},

// ];




const qArray = [
	{
		question: "What does CSS stand for?",
		text1: "Creative Style Sheet",
		text2: "Sheet",
        text3: "Cascading Style Sheet",
        text4: "Consortium of Style Systems", 
		correctAnswer: "Cascading Style Sheet"
	},
	{
		question:
        " When was C++ created by Bjarne Stroustrup, the Danish computer scientist?",
		text1: "1878", 
		text2: "1973", 
		text3: "2015", 
        text4: "1983", 
        correctAnswer: "1983"
	
	},
	{
		question: "What is <addEventListener> in JS ?",
			text1: "a string", 
			text2: "a method", 
			text3: "a variable", 
            text4: "un pain au chocolat", 
            correctAnswer: "a method"
	},
	{
		question: "What is JQuery ?",
			text1: "CSS",
			text2: "a method", 
			text3: "a framework", 
            text4: "a question", 
            correctAnswer: "a framework"
    },
    {
		question: "Where was MySQL developed in 1995, before being aquired by Oracle?",
			text1: "SUA", 
			text2: "Sweden", 
			text3: "UK", 
            text4: "Hong Kong", 
            correctAnswer: "Sweden"
	},

];








// VARIABLES - BROUGHT IN FROM HTML

var timerValEl = document.getElementById("tm-val");
var scoreValEl = document.getElementById("sc-val");
var startBtn = document.getElementById("play");
var nextBtn = document.getElementById("next");
var scoretBtn = document.getElementById("score");
var questionEl = document.getElementById("q-box");
var choice1El = document.getElementById("a1");
var choice2El = document.getElementById("a2");
var choice3El = document.getElementById("a3");
var choice4El = document.getElementById("a4");
var abox = document.getElementById("a-box");



// VARIABLES

let timerValShown = 100;
let scoreValShown = 0;
var timerInterval;
var timerVAL;
var localQuestion;
let shuffleQ;
let qIndex;
var clicked;
var userClicked;
    // this is only to be able to display the timerValShown when the page loads
    timerValEl.textContent = timerValShown;



// when the app loads, 
// window.onload(function(){
//     // tm-box.classList.remove("hide");
//     score = 0;
//     scoreValShown.textContent = score;
//     // timerValEl.textContent = timerValShown;
// })




// Adding the EventListener to start button to launch timer function
// Inside EventListener is the function <timer> which uses the method setInterval
// setInterval method has two parameters, (function, interval). The interval is in milliseconds, hence the second argument is <1000>
// Also, the play button calls the startQuiz function
startBtn.addEventListener("click", function timer(){
    // firstQuestion (qIndex)
    startQuiz();

    // the timer function: 
      let timerVAL = setInterval(function (){
          timerValEl.textContent = timerValShown;
          // timerValShown--    -->>  if this is here, timer stops at 1 instead of 0;
          if(timerValShown === 0) {
              clearInterval(timerVAL);
              timeIsUp();
          }
          timerValShown--;
      }, 1000);
  
    //   firstQuestion();
    // loadQ();
  
  });




//   Function <timeIsUp> to be called inside the startBtn Listener, if the timerValShown is zero.
//   This function provides a "time's up!" message in the question box 
function timeIsUp(){
    if (timerValShown === 0) {
        questionEl.textContent = "Time's Up !"
    }
}


  


// startQuiz function that is called inside startBtn eventListener
// this startQuiz functions initialize the qIndex = 0 and uses it to call the <setNextQ> function
function startQuiz (){
        qIndex = 0;
        loadQ();
}






// the nextQ function calls the loadQ which takes the shuffled questions array defined in startQuiz function 
function nextQ(){
    // loadQ(shuffleQ[qIndex]);
    qIndex = qIndex +1;
    loadQ(qIndex);
    // checkAnswer(qIndex);
}



// The loadQ function updates the appropriate divs with the objects' elements
function loadQ(){

    questionEl.textContent = qArray[qIndex].question;
    choice1El.textContent = qArray[qIndex].text1;
    choice2El.textContent = qArray[qIndex].text2;
    choice3El.textContent = qArray[qIndex].text3;
    choice4El.textContent = qArray[qIndex].text4;

}






// Listener on button clicked by user. Takes the user input and stores it into <userClicked> variable. 
// Uses this variable to compare with the <correctAnswer>
abox.addEventListener("click", function(e){
    
    e = e || window.event;
    var target = e.target || e.srcElement,
        userClicked = target.textContent || target.innerText;
        console.log("user has clicked   " + userClicked);
        console.log("score before check   " + scoreValShown);

        // since the userClicked is local, the check answer loop ust be here:
        if (userClicked === qArray[qIndex].correctAnswer) {
            scoreValShown = scoreValShown +1; 
            console.log("score after check is   " + scoreValShown);
            }
})








// next button functionality
nextBtn.addEventListener("click", function(){
    nextQ();
})
