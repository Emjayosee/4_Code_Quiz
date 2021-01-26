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
       
            timerId = setInterval(clockTick, 1000);

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

    function quizEnd(){
        clearInterval(timerId);
    }

        // function startTimer(duration, display) {
        //     var timer = duration, minutes, seconds;
        //     setInterval(function () {
        //         minutes = parseInt(timer / 60, 10);
        //         seconds = parseInt(timer % 60, 10);
        
        //         minutes = minutes < 10 ? "0" + minutes : minutes;
        //         seconds = seconds < 10 ? "0" + seconds : seconds;
        
        //         display.textContent = minutes + ":" + seconds;
        
        //         if (--timer < 0) {
        //             timer = duration;
        //         }
        //     }, 1000);
        // }
        
        // window.onload = function () {
        //     var oneMinutes = 60,
        //         display = document.querySelector('#time');
        //     startTimer(oneMinutes, display);
        // };

        //declare an object called quiz with the Q and A

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
        
            
            
            

    //   document.getElementById("qtext")= (quiz.questions[0]);
    //   document.getElementById("choiceA")= (quiz.answers[0];
    