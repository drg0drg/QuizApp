

// -------------------------------------------//
// ------------PSEUDOCODE QUIZ APP------------//
// -------------------------------------------//



// Create sets of Q+A         
// These sets are objects with keys and values
// Designate the correct answer. This will be compared later to the user input
// These objects form an array of Q/A sets
// Create timer countdown  
// Set the timer at a specific value  
// By an addEventListener, start the timer when <play> button is pressed 
// Create a function that runs through the QA array and display each set
// Add this function in the same addEventListener for the <play> button
// Create compare loop that compares the user input to the correct answer
// Inside this function, create if/else loop -> if userIn===correctAnswer than increase score, else decrease time
// Create function to stop the game
// Inside this function, create if loop -> if timer=0 || no questions left than stop game






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
		question: "Where was MySQL developed in 1995, before being acquired by Oracle?",
			text1: "USA", 
			text2: "Sweden", 
			text3: "UK", 
            text4: "Hong Kong", 
            correctAnswer: "Sweden"
	},

];








// Variables - brought from HTML

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
var scoresList = document.getElementById("ul-scores-list");

var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
// var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");



// Variables

let timerValShown = 20;
let scoreValShown = 0;
var numberOfScores = 5;
var timerInterval;
var timerVAL;
var localQuestion;
let shuffleQ;
let qIndex;
var clicked;
var userClicked;
// this is only to be able to display the timerValShown when the page loads
timerValEl.textContent = timerValShown;
// this is only to be able to display the scoreValShown when the page loads
scoreValEl.textContent = scoreValShown;


// when the app loads, 
// window.onload(function(){
//     // tm-box.classList.remove("hide");
//     score = 0;
//     scoreValShown.textContent = score;
//     // timerValEl.textContent = timerValShown;
// })



// ------------------------------------
// ------------Game section------------
// ------------------------------------




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
        //   scoreValEl = scoreValShown;
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
        scoreValShown = 
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






// Listener on button clicked by user. Takes the user input and stores it into <userClicked> local variable. 
// Uses this variable to compare with the <correctAnswer>
abox.addEventListener("click", function(e){
    
    e = e || window.event;
    var target = e.target || e.srcElement,
        userClicked = target.textContent || target.innerText;
        console.log("user has clicked   " + userClicked);
        console.log("score before check   " + scoreValShown);

        // since the userClicked is local, the check answer loop must be here:
        if (userClicked === qArray[qIndex].correctAnswer) {
            scoreValShown += 10; 
            scoreValEl.textContent = scoreValShown
            console.log("score after check is   " + scoreValShown);
            } else {
                timerValShown -= 5;
                if (timerValShown - 5 < 0){
                    timerValShown = 0;
                    timerValEl.textContent = timerValShown;
                }
            }
            
})








// next button functionality
nextBtn.addEventListener("click", function(){
    nextQ();

})







// ------------------------------------
// ------------Score section-----------
// ------------------------------------






// function to create the <scores> list to be locally saved
function saveScore(e){
    e.preventDefault();
    var score = {
        scoreUserFinal: scoreValShown,
        nameUserFinal: userName.value
    };
    scoresEnd.push(score);
    scoresEnd.sort( (a,b) => b.score - a.score);
    scoresEnd.splice(numberOfScores);

    localStorage.setItem('scores-list-scPg', JSON.stringify(scoresEnd));
    // window.location.assign('/index.html');
}


// add event listener for saveScoreBtn



// the <scoresList> is an <ul>
// converting the value(string) from <scores> variable into an array of JS object with JSON.parse
// storing the <scores> JS object in local storage with localStorage
const scoresEnd = JSON.parse(localStorage.getItem('scores-list-scPg')) || [];






// have the <scores> array of objects into a list item
scoresList.innerHTML =
	scoresEnd.map( score => {
			return `<li class="list-score">${score.nameUserFinal}-${score.scoreUserFinal}</li>`;
})
.join("");