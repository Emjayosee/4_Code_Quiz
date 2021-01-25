 /* This is the stylesheet to my Password Generator Website it is
organized top down to match the HTML flow.  Much of the CSS styling is self explanatory due to the semantic HTML used in the associated file. */

/*last updated by Michael O'Connor, January 24, 2021*/


/* I have not used all of the client's starter text to format things, accordingly nor did I use the client's suhggestion of a bunch of sequential dialogue boxes to set the criteria.   Rather I have used a slider to ensure that the user stays within the correct range and check boxes to select the character set types.

I have not used all of the special characters available since some are difficult to read or type or could result in odd outcomes when used in an actual; system, such a "/".   I have built in a reset button and as well the password resets if any of the variables are changed, this will ensure that the output is based on the visible input fields.   I thought about putting in a message if none of the dialog boxes were clicked, but heck, I can't cater to that level of incompetence (nor could I figure out exactly how to do that so I may take that up with my tutor.*/

    // function to show the value of the password length implied by the slider position
    // user can also use left right arrows to tick between set values of 8 - 128
    function updateTextInput(val) {

      var password = ""
      document.getElementById("textInput").value = val;
      document.getElementById("answer").innerHTML = password;
    }

    function resetPassword(val){

      var password = ""
      document.getElementById("answer").innerHTML = password;
    }

    // variables at start, inspired by some JS from https://www.mediacollege.com/internet/javascript/number/random.html
    var numbers = "0123456789";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghiklmnopqrstuvwxyz";
    var special = "#$%&()*+/=?@[]^_{|}";
    var characters = numbers + upper + lower + special;
    var password = '';

    function runrandomstring(event) {

      var string_length = document.querySelector("#length").value;

      // check which types of characters are desired before generating password
      var usenumbers = document.querySelector("#paranumber").checked
      var useupper = document.querySelector("#paraupper").checked
      var uselower = document.querySelector("#paralower").checked
      var usespecial = document.querySelector("#paraspecial").checked
      var characters = (usenumbers ? numbers : '')
        + (useupper ? upper : '')
        + (uselower ? lower : '')
        + (usespecial ? special : '')

      // Calculation for determining randomstring:
      var password = ""

      {    
        for (var i = 0; i < string_length; i++) {
          var rnum = Math.floor(Math.random() * characters.length);
          password += characters.substring(rnum, rnum + 1);
        }

        // send the answer to the password solution box

        document.getElementById("answer").innerHTML = "Password:     " + password;
      }
    }
