<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Word Guesser Starter Code</title>
</head>
<body>

<div id="guess_display"></div>


    <form id="guess_form">
    <label>Guess a letter:
    <input type="text" id="guess_input">
    </label>
    </form>

    <div id="guess_status"></div>

    <script>
// Store DOM elements in variables
var guessForm = document.getElementById("guess_form");
var guessDisplay = document.getElementById("guess_display");
var guessInput = document.getElementById("guess_input");
var guessStatus = document.getElementById("guess_status");

// Initialize game state variables
var secretWord = "banana";
var guessedWord = [];
var guessedLetters = [];
for (var j = 0; j < secretWord.length; j++) {
    guessedWord[j] = "_";
}

// Returns true if its a correct guess -
//  if the letter is anywhere in the word
// Also updates guessedWord and guessedLetters
var isletter= false
var numberGuessedRight = 0;
var checkLetterGuess = function(letter) {
    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i]===letter){
            isletter=true;
            numberGuessedRight++;
        }

    };
    return isletter;
};
var wordNoRepeats= secretWord;
// Returns true if they guessed the whole word
var hasWon = function() {
    if (numberGuessedRight === secretWord.length) {
        return true
    }
    {

    };
};


var displayGuessedWord = function() {
    guessDisplay.innerHTML = guessedWord.join(" ");
};


guessForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var foundLetter = checkLetterGuess(guessInput.value);
    if (foundLetter) {
        guessStatus.innerHTML = "Yay you found one!";
    } else {
        guessStatus.innerHTML = "Sorry, not so much!";
    }
    if (hasWon()) {
        guessStatus.innerHTML += "WOOO WINNER WINNER!";
    }
    displayGuessedWord();
    guessInput.value = "";
});
displayGuessedWord();

</script>

</body>
</html>