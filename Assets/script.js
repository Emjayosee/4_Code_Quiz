 /* This is the script file to my Coding Game website, assignment 4. It is
organized top down to match the HTML flow.  Much of the CSS styling is self explanatory due to the semantic HTML used in the associated file. */

/*last updated by Michael O'Connor, January 31, 2021*/
/* There was no starter code, so I am in the deep end of the pool*/

/* Here is the plan:

[X] On load, display introduction and name/start section

[X] User enters name

[X] On START, question 1 is displayed and clock starts to countdown, await user event, user is greated by name

[X] User selects answer from choice of boxes and submits response by clicking button

[X] If time = 0, quizEnd

[X] On Click, nextQuestion

[X] If answer is correct, score = plus one

[X] If answer is incorrect time = minus 5 seconds

[X] If (time > 0 and Q# < array.length), loadNextQuestion, else, quizEnd

[X] If quizEnd, display gameOver Image, with finalScore for 5 seconds 

[X] Load name and finalScore to display

[X] Display scoreBoard and playAgain Button

[ ] If playAgain, clear and restart the process 

*/

/* Set Global Variables, including questions, some variable arenamed locally below */
// list of all questions, choices, and answers
var questions = [
    {
        quest: "What does HTML stand for?",
        choices: ["He Took My Laptop", "Hyper Text Markup Language", "Hydraulically Torqued Machine Language", "Hewlett Then Made Laptops"],
        answer:"Hyper Text Markup Language",
},
    {
        quest: "Who claimed to have invented the internet, but didn't?",
        choices: ["Robert Kahn and Vint Cerf", "Steve Jobs", "Al Gore", "Bill Clinton"],
        answer: "Al Gore",
},
  {
        quest: "Who actually invented the internet?",
        choices: ["Robert Kahn and Vint Cerf", "Tim Berners-Lee", "Depends Who You Ask", "Bill Gates"],
        answer: "Depends WHo You Ask",
}, 
    {
        quest: "API is an abbreviation for what",
        choices: ["Application Processing Interval", "Annual Pay Incentive", "Application Programming Interface", "Whatever"],
        answer: "Application Programming Interface",
},
    {
        quest: "How many milliseconds in a second?",
        choices: ["100", "10", "10,000", "1,000"],
        answer: "1,000",
 },
];

      // Variables to keep track of quiz score
      var questionIndex = 0;
      var time = 60;
      var interval;

      // Variables to reference DOM elements

      var playerName = "";
      var timer = document.querySelector("#time");
      // var playerName = document.querySelector("playerName");
      var options = document.querySelector("#choices");
      var submit = document.querySelector("#submit");
      var start = document.querySelector("#startbtn");
      var initial = document.querySelector("#initials");
      var showselection = document.querySelector("#showselection");
      var greeting = document.querySelector("#player")
      var timerId;
      var correctAnswers = 0;
      var question = document.querySelector("#questions");
      var instructions = document.querySelector("#instructions");

      
      //This is the function that runs first, accepts the name and tarts the clock
      //
      function startQuiz(event) {
          event.preventDefault(event)

          playerName = document.getElementById("playerName").value;

        if (playerName == "") {
              alert("You Must Enter a Name to Play");
          } else {

        instructions.setAttribute("class", "hide");
        
        question.removeAttribute("class");

        greeting.textContent = playerName;

        timerId = setInterval(clockTick, 1000);

        getQuestion();
        
          }
      }

      function getQuestion() {
        // get current question object from array
        var cQuestion = questions[questionIndex];

        // update quest with current question
        var quest = document.querySelector("#quest");

        //Start the clockticking and show the time remaining
        
        timer.textContent = time;

        quest.textContent = cQuestion.quest;

        options.innerHTML = "";

        //Loop over choices - (base created by Luca)
        for (var i = 0; i < cQuestion.choices.length; i++) {
          var choice = cQuestion.choices[i];
          //create button for each choice
          var selection = document.createElement("button");
          selection.setAttribute('frameborder', "0");
          
          var questionNumber = document.querySelector("#questionNumber") 
          questionNumber.innerHTML = "Question " + (questionIndex+1) + " of " + questions.length;
          selection.setAttribute("class", "choice");
          selection.setAttribute("value", choice);
          selection.textContent = i + 1 + ". " + choice;
          // attach click event listener
          selection.onclick = questionClick;
          
          //attach to query selector options
          options.appendChild(selection);
        }
      }

      function questionClick() {
        if (this.value !== questions[questionIndex].answer) {
          time -= 5;

          if (time < 0) {
            time = 0;
          }

          timer.textContent = time;

          showselection.textContent = "Wrong!";
        } else {
          showselection.textContent = "Correct!";
          correctAnswers++
        }

        showselection.setAttribute("class", "showselection");
        setTimeout(function () {
          showselection.setAttribute("class", "showselection hide");
        }, 1000);

        questionIndex++;

        if (questionIndex === questions.length) {
          
          quizEnd();
        } else {
          getQuestion();
        }
      }

      function quizEnd() {
        clearInterval(timerId);
      
        var container = document.querySelector("#mainContainer");
        container.setAttribute("class", "hide");
     
        var endScreen = document.querySelector("#gameOverBox");
        endScreen.removeAttribute("class", "hide");
     
        var finalScore = document.querySelector("#score");
        finalScore.textContent = time;

        document.querySelector("#finalName").textContent = playerName
        document.querySelector("#finalScore").textContent = correctAnswers
        document.querySelector("#finalTime").textContent = (60-time)
      }

      function clockTick() {
        time--;
        timer.textContent = time;
        
        if (time == 0) {
          quizEnd();
        }
      }

      function reset(){
    
        question.setAttribute("class", "hide");
        instructions.removeAttribute("class", "hide");
        document.querySelector("#mainContainer").removeAttribute("class", "hide");
        document.querySelector("#gameOverBox").setAttribute("class", "hide");
        questionIndex = 0;
        time = 60;
        correctAnswers = 0;

        startQuiz;

      }

      start.onclick = startQuiz;

      /* this code is left for a future release incpoorating a scoreboard when I grasp JSON*/    
      // function saveHighscore() {
      //   var initials = playerName.value.trim();

      //   // make sure value wasn't empty
      //   if (playerName !== "") {
      //     // get saved scores from localstorage, or if not any, set to empty array
      //     var highscores =
      //       JSON.parse(window.localStorage.getItem("highscores")) || [];

      //     // format new score object for current user
      //     var newScore = {
      //       score: time,
      //       initials: playerName,
      //     };

      //     // save to localstorage
      //     highscores.push(newScore);
      //     window.localStorage.setItem("highscores", JSON.stringify(highscores));

      //     window.location.href = "highscores.html";
      //   }
      // }

      // submit.onclick = saveHighscore;

      

