 /* This is the stylesheet to my Password Generator Website it is
organized top down to match the HTML flow.  Much of the CSS styling is self explanatory due to the semantic HTML used in the associated file. */

/*last updated by Michael O'Connor, January --, 2021*/
/* There was no starter code, so I am in the deep end of the pool*/
        var startTime = 60;
        var timerEl = document.querySelector("#time");
        var timerId;

    function revealQ1(event) {
        event.preventDefault()
        
        var field = document.getElementById("playerName").value;

        if (field == "") {
            alert("You Must Enter a Name to Play");
        } else {
        
            document.getElementById("quizcontainer").style.color = "black";
            // document.querySelector("container").style.backgroundColor = "black";
            // document.querySelector("checkmark").style.backgroundColor = "black";

            timerId = setInterval(clockTick, 1000);

            document.querySelector("#question").textContent = quiz[0].question;
            document.querySelector("#choiceA").textContent = quiz[0].choices[0];
            document.querySelector("#choiceB").textContent = quiz[0].choices[1];
            document.querySelector("#choiceC").textContent = quiz[0].choices[2];
            document.querySelector("#choiceD").textContent = quiz[0].choices[3];
        }
           
    }
    function clockTick() {
        startTime--;
        timerEl.textContent=startTime;
        if (startTime <= 0) {
        quizEnd();
        }
    }

    var quiz = 0;
    
    // function nextQuestion(event){
    //     event.preventDefault()

    //         document.querySelector("#questionNumber").textContent = "Question 2 of 5";
    //         document.querySelector("#choiceA").textContent = quiz[1].choices[0];
    //         document.querySelector("#choiceA").textContent = quiz[1].choices[0];
    //         document.querySelector("#choiceB").textContent = quiz[1].choices[1];
    //         document.querySelector("#choiceC").textContent = quiz[1].choices[2];
    //         document.querySelector("#choiceD").textContent = quiz[1].choices[3];


    
    //     questionNum++
    //     // decide to show next question (if more), else end quiz
    //     if( questionNum<questions.length )
    //       showNextQuestion()
    //     else
    //       finishQuiz()
    //   }

    function quizEnd(){
        clearInterval(timerId);
    }

        var quiz = [
            {
                question: "What does HTML stand for?",
                choices: ["He Took My Laptop", "Hyper Text Markup Language", "Hydraulically Torqued Machine Language", "Hewlett Then Made Laptops"],
                answer:"Hyper Text Markup Language",
        },
            {
                question: "QuestionTwo",
                choices: ["Choice2A", "Choice2B", "Choice2C", "Choice2D"],
                answer: "Choice2C",
        },
            {
                question: "QuestionThree?",
                choices: ["Choice3A", "Choice3B", "Choice3C", "Choice3D"],
                answer: "Choice3B",
        }, 
            {
                question: "QuestionFour",
                choices: ["Choice4A", "Choice4B", "Choice4C", "Choice4D"],
                answer: "Choice4C",
        },
            {
                question: "QuestionFive?",
                choices: ["Choice5A", "Choice5B", "Choice5C", "Choice5D"],
                answer: "Choice5D",
         },
        ];
        
        function nextQuestion(){

        }
            
            

    //   document.getElementById("qtext")= (quiz.questions[0]);
    //   document.getElementById("choiceA")= (quiz.answers[0];
    