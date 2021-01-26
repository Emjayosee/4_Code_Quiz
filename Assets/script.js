 /* This is the stylesheet to my Password Generator Website it is
organized top down to match the HTML flow.  Much of the CSS styling is self explanatory due to the semantic HTML used in the associated file. */

/*last updated by Michael O'Connor, January --, 2021*/


/* There was no starter code, so I am in the deep end of the pool*/

    function revealQ1() {
        event.preventDefault();
        var field = document.getElementById("playerName").value;
        if (field == "") {
            alert("You Must Enter a Name to Play");
            event.preventDefault();
        } else {
        document.getElementById("quizcontainer").style.color = "black";
        }

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        
        window.onload = function () {
            var fiveMinutes = 60 * 5,
                display = document.querySelector('#time');
            startTimer(fiveMinutes, display);
        };

        var quiz = {
            questions: ["What does HTML stand for?", "Here is Question Two", "Here is Question Three", "Here is Question Four", "Here is Question Five"],
            answers: [["He Took My Laptop", "Hyper Text Markup Language", "Hydraulically Torqued Machine Language", "Hewlett Then Made Laptops"], ["Choice2A", "Choice2B", "Choice2C", "Choice2D"], ["Choice3A", "Choice3B", "Choice3C", "Choice3D"], ["Choice4A", "Choice4B", "Choice4C", "Choice4D"], ["Choice5A", "Choice5B", "Choice5C", "Choice5D"]]
        }

    //   document.getElementById("qtext")= (quiz.questions[0]);
    //   document.getElementById("choiceA")= (quiz.answers[0];
    

    


    // function clickNextButton {
    //     console.log("Go get next question")
    // }

