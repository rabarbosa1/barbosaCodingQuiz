var intro = document.getElementById("intro")
var questions = document.getElementById("questions")
var final = document.getElementById("final")
var viewScores = document.getElementById("view-scores")
var time = document.getElementById("time")
var start = document.getElementById("start")
var questionText = document.getElementById("questionText")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3= document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var initials = document.getElementById("initials")
var submitScore = document.getElementById("submitScore")
var goBack = document.getElementById("goBack")
var clearScores = document.getElementById("clearScores")
var finalScore = document.getElementById("finalScore")
var scoreList = document.getElementById("scoreList")
var timeLeft = 60
var timer;
var questionIndex = 0
var questionArray = [
    {
        questionText:"Commonly used data types do NOT include:",
        choices:[
            "A. strings", "B. booleans", "C. alerts", "D. numbers"
        ], 
        answer:"B. booleans"
    },
    {
        questionText:"The condition in an if / else statement is enclosed within ____.",
        choices:[
            "A. quotes", "B. curly brackets", "C. parentheses", "D. square brackets"
        ], 
        answer:"A. quotes"
    },
    {
        questionText:"Arrays in Javascript can be used to store ____.",
        choices:[
            "A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"
        ], 
        answer:"C. booleans"
    },
]
   
start.addEventListener("click",startQuiz)
answer1.addEventListener("click",nextQuestion)
answer2.addEventListener("click",nextQuestion)
answer3.addEventListener("click",nextQuestion)
answer4.addEventListener("click",nextQuestion)
function startQuiz(){
    timer=setInterval(function(){
        timeLeft--
        time.textContent="Time: "+timeLeft
        if (timeLeft<=0){
            quizEnd()
        }
    },1000)
    intro.classList.add("hidden")
    questions.classList.remove("hidden")
    questionText.textContent= questionArray[0].questionText
    answer1.textContent= questionArray[0].choices[0]
    answer2.textContent= questionArray[0].choices[1]
    answer3.textContent= questionArray[0].choices[2]
    answer4.textContent= questionArray[0].choices[3]
    
}
function nextQuestion(event){
    console.log(event.target.textContent)
    console.log(questionArray[questionIndex].answer)
  if (event.target.textContent===questionArray[questionIndex].answer) {
    alert("Correct")
  }else{
    alert("Incorrect")
    timeLeft-=5
  }
    questionIndex++
    questionText.textContent= questionArray[questionIndex].questionText
    answer1.textContent= questionArray[questionIndex].choices[0]
    answer2.textContent= questionArray[questionIndex].choices[1]
    answer3.textContent= questionArray[questionIndex].choices[2]
    answer4.textContent= questionArray[questionIndex].choices[3]
}
function quizEnd(){
    clearInterval(timer)
}

function submitScore(event) {
    event.preventDefault();

    scoreList.push({ initials: init, score: secondsLeft });

}


    