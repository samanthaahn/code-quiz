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

displayQuestion();




// //var questionOne = {
//     prompt: "Commonly used data types DO Not include:",
//     choices: ["Strings", "Booleans", "Alerts", "Numbers"],
//     answer: "Alerts"
// }

// We need 5 questions with 4 choices
// we also need to let the user know if the choice they picked is incorrect or correct

// Question 1: Commonly used data types DO Not include: 1. Strings 2. booleans 3. alerts 4. numbers

// Question 2: The condition in an if / else statement is enclosed with _____. 1. quotes 2. curly brackets 3. parenthesis 4. square brackets

// Question 3: Arrays in JavaScript can be used to store ___. 1. numbers and strings 2. other arrays 3. booleans. 4. all of the above.

// Question 4: String values must be enclosed with ___ when being assigned to variables. 1. commas 2. curly brackets 3. quotes 4. parenthesis

// Question 5: A very useful tool used during development and debugging for printing content to the debugger is: 1. JavaScript 2. terminal/bash 3. for loops 4. console.log
