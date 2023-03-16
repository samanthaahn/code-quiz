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
var pAnswers = document.querySelector(".correct");
var highScore = document.querySelector(".high-score");
var nextQuestion = document.querySelector(".next-question");
var i = 0;
var userChoice = "";
var time;
var textAreaEl = document.querySelector(".textarea"); // this is for my initials 
var highScoreCounter = ''; //not sure if this is correct
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
  pAnswers.innerText= 'Correct!'
  } else {
    pAnswers.innerText= 'Wrong'
    count-=10;
  }
  i++; //not sure if I can do this 
});

// got this from our previous thing but not sure if "i" interferes with my text for my questions 
textAreaEl.addEventListener ('keydown', function(event) {
var key = event.key.toUpperCase();
var alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(
'' 
);
if (alphabetCharacters.includes(key)) {
  for (var i =0; i < elements.length; i++) {
    elements[i].textContent += event.key;
  }
}
})

//this is my local storage but not sure if this is right? 
function highScoreCounter() {
highScore.textContent = count;
localStorage.setItem("highScore", count);
}
// array of objects with initial and save object with user initial and their score (stringigy and parse) THEN save an array so eacht ime someone new comes in add ot the arry and save to local storage 

// this is supposed to take the person to the next page 
function showHighScore() {
  document.querySelector(".card").style.display = "none";
  document.querySelector(".last-page").style.display = "block";
}

nextQuestion.addEventListener('click', function(event) {
    if (i >= testQuestions.length) {
    showHighScore();
  }  else {
    displayQuestion();
  }

})

function displayQuestion() {
    pAnswers.innerText='';
  quizQuestions.textContent = testQuestions[i].prompt;
  choiceA.textContent = testQuestions[i].choices[0];
  choiceB.textContent = testQuestions[i].choices[1];
  choiceC.textContent = testQuestions[i].choices[2];
  choiceD.textContent = testQuestions[i].choices[3];
}


function timerCountdown() {
  time = setInterval(function () {
    count--;
    timer.textContent = count;
    if (count < 0) {
      finish();
    }
  }, 1000);
}



function finish() {
  clearInterval(timer);
  highScore();

}

function startQuiz() {
  welcome.setAttribute("style", "display:none");
  timerCountdown();
  displayQuestion();
}


countdown();
displayQuestion();

// function highScore()

// .done {
//   done.textContent("Your high schore is" + (count));
// }