// Assignment Code

var quizQuestions = document.querySelector(".quiz-questions");
var answerOptions = document.querySelector(".answer-choices");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");
var timer = document.querySelector("#time");
var buttonEl = document.querySelector(".start");
var welcome = document.querySelector(".welcome");
var i = 0;
var userChoice = "";
var time;
var count = 100;
var finalScore = "";
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
    choices: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    prompt:
      "String values must be enclosed with ___ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer: "Quotes",
  },
  {
    prompt:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answer: "console.log",
  },
];

answerOptions.addEventListener("click", function (event) {
  console.log(event.target);
  if (testQuestions[i].answer === event.target.textContent) {
  }
  i++;
  displayQuestion();
});

function displayQuestion() {
  quizQuestions.textContent = testQuestions[i].prompt;
  choiceA.textContent = testQuestions[i].choices[0];
  choiceB.textContent = testQuestions[i].choices[1];
  choiceC.textContent = testQuestions[i].choices[2];
  choiceD.textContent = testQuestions[i].choices[3];
}



function timerCountdown() {
  time = setInterval(function () {
    count--;
    console.log(count)
    timer.textContent = count;
    if (count < 0) {
      finish();
    }
  }, 1000);
}

function startQuiz() {
  welcome.setAttribute("style", "display:none");
  timerCountdown();
  displayQuestion();
}


countdown();

displayQuestion();
