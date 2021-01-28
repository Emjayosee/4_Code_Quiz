 /* This is the stylesheet to my Password Generator Website it is
organized top down to match the HTML flow.  Much of the CSS styling is self explanatory due to the semantic HTML used in the associated file. */

/*last updated by Michael O'Connor, January --, 2021*/
/* There was no starter code, so I am in the deep end of the pool*/

/* Here is the plan:


[X] On load, display introduction and name/start section

[X] User enters name

[X] On START, question 1 is displayed and clock starts to countdown, await user event

[X] User selects answer from radio box and submits response by clicking button

[ ] If time = 0, quizEnd

[ ] On Click, nextQuestion

[ ] If answer is correct, score = plus one

[ ] If answer is incorrect time = minus 5 seconds

[ ] If (time > 0 and Q# < array.length), loadNextQuestion, else, quizEnd

[ ] If quizEnd, display gameOver Image, with finalScore for 5 seconds 

[ ] Load name and finalScore to scoreBoard

[ ] Display scoreBoard and playAgain Button

[ ] If playAgain, clear and restart the process 

*/

/* Set Variables, including questions */

var startTime = 60;
var endTime
var timerEl = document.querySelector("#time");
var timerId;
var x = 1;   
var score = 0;
var quiz = [
    {
        question: "What does HTML stand for?",
        choices: ["He Took My Laptop", "Hyper Text Markup Language", "Hydraulically Torqued Machine Language", "Hewlett Then Made Laptops"],
        answer:"B",
},
    {
        question: "QuestionTwo",
        choices: ["Choice2A", "Choice2B", "Choice2C", "Choice2D"],
        answer: "C",
},
    {
        question: "QuestionThree?",
        choices: ["Choice3A", "Choice3B", "Choice3C", "Choice3D"],
        answer: "B",
}, 
    {
        question: "QuestionFour",
        choices: ["Choice4A", "Choice4B", "Choice4C", "Choice4D"],
        answer: "C",
},
    {
        question: "QuestionFive?",
        choices: ["Choice5A", "Choice5B", "Choice5C", "Choice5D"],
        answer: "D",
 },
];

var y = quiz.length 

function start(event) {
event.preventDefault()

var field = document.getElementById("playerName").value;

if (field == "") {
    alert("You Must Enter a Name to Play");

} else {
   
    questionBox.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);
    
    for ( i = 0; i < quiz.length; i++) {

    document.querySelector("#questionNumber").textContent = "Question " + x + " of " + quiz.length;
    document.querySelector("#question").textContent = quiz[0].question;
    document.querySelector("#choiceA").textContent = quiz[0].choices[0];
    document.querySelector("#choiceB").textContent = quiz[0].choices[1];
    document.querySelector("#choiceC").textContent = quiz[0].choices[2];
    document.querySelector("#choiceD").textContent = quiz[0].choices[3];
    
   /* quizEnd(); */

   /* currentScore(); */
    }
    document.getElementById("finalName").innerHTML = playerName;
    document.getElementById("finalScore").innerHTML = "Your Final Score is :     " + score;
    document.getElementById("finalTime").innerHTML = "Your Final Time is :     " + (startTime - endTime);

}
}

function clockTick() {
startTime--;
timerEl.textContent=startTime;
if (startTime <= 0) {
quizEnd();
}
}

/*function quizEnd(){
gameOver.removeAttribute("class");
clearInterval(timerId);

var gameOver = document.querySelector("#gameOver");
gameOver.removeAttribute("class");

var finalScore = document.querySelector("#score");
finalScore.textContent = time;

question.setAttribute("class", "hide");
}

function currentScore(){

if (this.value !== quiz.answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }else{
    score = score +1
    }

function playAgain(){
quizEnd()  /* somehow reset the game to the beginning
}*/


