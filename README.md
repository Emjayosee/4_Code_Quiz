# Assignment04
This is the repo for the Code Quiz assignment 04, due Jan 26, 2021.


# Unit 04 Javascript Homework: Code Quiz

Submitted: January 31 2021, Michael O'Connor, WebDev Wannabe, 604 765-6061

# 01 Goal: The Goal of this project is .......  Here is a link to the Github folder https://github.com/Emjayosee/Assignment04 and a link to the deployed website https://emjayosee.github.io/Assignment04/.

# 02 Approach:

    In approching this project, I at first looked at the starter code provided, then found that there was no starter code, so I realized I had to build this entirely from scratch.  I did require significant support on the loop and my original designn had to be reworked.  Here is a link to the deployed page - https://emjayosee.github.io/Assignment04/.

    I followed the following plan design:

        Code Quiz

            Goal:

            Develop a timed quiz on Coding and have it present a question, allow th user time to respond and go to the next question, advising the user if they are correct or incorrect and then keeping track of the scores and high scores.

            Design:
            •	Landing page to expain the rules, show the high scores;
            •	Need to build a timer to countdown and penalize if there is a wrong guess;
            •	Need to be able to cycle questions through a part of the viewport;
            •	Need a way to aggregate the scores, add as records and display the top scores;
            •	Need an alert to say when the game is over;
            •	Need a way to identify the player;
            
            Here is the basic logic flow (ignoring the high score feature):


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


            Build:
            •	Set up three files, index.html, script.js and style.css (add to Github) [x]
            •	HTML:
                >Layout for Landing page [x]
                >Layout for question and multiple choice answers [x]
                >Knit functions for current score, gameOver. [x]

            •	JavaScript: 
                > Timer routine [x]
                > Splash screen routine that announces game is over - alert box [x]
            •	CSS:
                >Stylish background image and footer styling [x]
            •   Establish Q&A theme [x]

            Validation:
            •	Alert if no name entered in required playerName field


# 03 Testing and Quality Control:

    1. Test each of the criteria to confirm functionality.

    2. Format HTML Code to make it easier to follow when viewed at source.

    3. Load the files and tested the page functionality at GITHUB.

    6. Run the html through a code validation service on the final commit.  Use validator.w3.org and describe any issues and resolution.  Adjust before the final commit. Some duplicate attribute issues, but does not seem to impact results.

# 04 Lessons Learned:

The following items should be considered for future enhancements, time and budget permitting:

    1. That InnerHTML was the space between the arrows in a tag.

    2. Intro to JSON and local storage.

    3.  Did not figure out how to format choice boxes.


# 05 Further improvements to make:

    1. Add the high score feature using local storage.

    2. Add a footer.


# 06 Current Renderings:

See Current Rendering at the time of writing in the Assignment04 Repo. 
![alt text](Assets/Images/StartScreenEMpty.png)
![alt text](Assets/Images/StartScreenWIthName.png)
![alt text](Assets/Images/Question.png)
![alt text](Assets/Images/QuestionCorrect.png)
![alt text](Assets/Images/GameOverScreen.png)