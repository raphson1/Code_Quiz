
var startButton = document.querySelector(".start-btn");
var userScore = document.querySelector("#user-score");
var timerEl = document.querySelector(".timer_count");
var questionEl = document.querySelector("#questions");
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");
var optionsEl = document.querySelector("#answerOptions");
var correct = document.querySelector("#correct");
var nextButton = document.querySelector(".next-btn");
var content = document.querySelector(".content");
var correctCount = 0;
var incorrectCount = 0;
var timer;
var timerCount = 30;
var isPass = false;
var queIndex = 0;
var rightAnswer;

function showResult(){
  if (correctCount > incorrectCount)
  alert("You win")
  else alert("You lose!!")
  clearInterval(timer);
} 

content.setAttribute("style", "display:none");


//function to reload the page.
function init() {
  getCorrect();
  getIncorrect();
}

function startTest() {
  content.setAttribute("style", "display:block");
  timerCount = 30;
  startTimer();
  queIndex = 0;
  incorrectCount = 0;
  correctCount = 0;
  nextQuestion();
}

function startTimer(){
   timer = setInterval(function(){
     console.log('interval occurring')
     timerCount --;
     timerEl.textContent = timerCount
     if (timerCount <= 0){
       clearInterval(timer)
       alert("Time is Over!!")
       showResult();
     }
}, 1000)
}

function choice(event){
  if ( event.target.textContent === rightAnswer){
    correct.textContent = "correct!!!" 
    correctCount++
  } else {
    correct.textContent = "Incorrect!!!"
    incorrectCount++
  }
}

function nextQuestion(event){
  if (queIndex < questions.length){

  var question = questions[queIndex++];
  questionEl.textContent = question["question"];
  ans1.textContent = question["options"][0];  
  ans2.textContent = question["options"][1];  
  ans3.textContent = question["options"][2];  
  ans4.textContent = question["options"][3];
  rightAnswer = question["answer"];
  
  } else showResult();
}

startButton.addEventListener("click", startTest);
ans1.addEventListener("click", choice);
ans2.addEventListener("click", choice);
ans3.addEventListener("click", choice);
ans4.addEventListener("click", choice);
nextButton.addEventListener("click", nextQuestion);



//QUESTIONS AND ANSWERS

var questions = [
    {
    numb: 1,
    question: "which is the first richest country in terms of source minerals?",
    answer: "DR Congo",
    options: [
      "United States of America",
      "DR Congo",
      "Russia",
      "South-Africa"
    ]
  },
    {
    numb: 2,
    question: "who is the First President of the United States Of America?",
    answer: "George Washington",
    options: [
      "Barack Obama",
      "George Washington",
      "Donald Trump",
      "George Bush"
    ]
  }, 
  {
    numb: 3,
    question: "What is the Capital city of Texas?",
    answer: "Austin",
    options: [
      "Austin",
      "Houston",
      "Dallas",
      "San-Antonio"
    ]
  }
]