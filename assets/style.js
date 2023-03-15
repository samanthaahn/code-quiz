// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Assignment Code

var quizQuestions = document.querySelector(".quiz-questions");
var answerOptions = document.querySelector(".answer-choices");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");
var timerEl = document.querySelector('#countdown');
var i = 0;
var userChoice = "";
var testQuestions = [
  {
    prompt: "Commonly used data types DO Not include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    prompt: "The condition in an if / else statement is enclosed with _____.",
    choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square brackets"],
    answer: "Curly Brackets",
  },
  {
    prompt: "Arrays in JavaScript can be used to store ___.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    answer: "All of the above",
  },
  {
    prompt: "String values must be enclosed with ___ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer: "Quotes",
  },
  {
    prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answer: "console.log",
  },
];

answerOptions.addEventListener("click", function(event) {
console.log(event.target);
if (testQuestions[i].answer===event.target.textContent) {
    
}
i++;
displayQuestion();
});



function displayQuestion (){
quizQuestions.textContent = testQuestions[i].prompt
choiceA.textContent = testQuestions[i].choices[0]
choiceB.textContent = testQuestions[i].choices[1]
choiceC.textContent = testQuestions[i].choices[2]
choiceD.textContent = testQuestions[i].choices[3]
}

//Timer that counts down from 100 seconds
function countdown() {
    var timeLeft = 100;
}

var timeInterval = setInterval(function(){
if (timeLeft > 1) {
    timeEl.textContent = timeLeft;
    timeLeft--;
} else if (timeLeft===1) {
    timerEl.textContent = timeLeft;
    timeLeft--;
} else {
    timeEl.textContent= '';
    clearInterval(timeInterval);
}
}, 1000);

displayQuestion();




// //var questionOne = {
//     prompt: "Commonly used data types DO Not include:",
//     choices: ["Strings", "Booleans", "Alerts", "Numbers"],
//     answer: "Alerts"
// }
