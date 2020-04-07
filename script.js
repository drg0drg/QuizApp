

// -------------------------------------------//
// ------------PSEUDOCODE QUIZ APP------------//
// -------------------------------------------//



// Create sets of Q+A
// These sets are objects with keys and values
// Designate the correct answer. This will be compared later to the user input
// These objects form an array of Q/A sets
// Create timer countdown
// Set the timer at a specific value
// By an addEventListener, start the timer when <play> button is pressed DONE
// By an addEventListener, stop the timer when <stop> button is pressed
// Create a function that runs through the QA array and display each set
// Add this function in the same addEventListener for the <play> button
// Create compare function that compares the user input to the correct answer
// Inside this function, create if/else loop -> if userIn===correctAnswer than increase score, else decrease time
// Create function to stop the game
// Inside this function, create if loop -> if timer=0 || no questions left than stop game




// VARIABLES

var timerValEl = document.getElementById("tm-val");
var scoreValEl = document.getElementById("sc-val");
var startBtn = document.getElementById("play");
var stopBtn = document.getElementById("stop");
var nextBtn = document.getElementById("next");
var scoretBtn = document.getElementById("score");


let timerValShown = 5;
let scoreValShown = 0;
var timerInterval;
var timerVAL;


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
});





stopBtn.addEventListener("click", function () {
    console.log("button works but doesn't work")
    clearInterval(timerVAL);
});






