// Require the Letter constructor that was exported from letter.js
var Letter = require("./letter.js");

// Constructor for words
function Word(currentWord) {
    this.newLetterArray = [];
         for (var i = 0; i < currentWord.length; i++) {
        // Create a letter object if it is not a space 
        if (currentWord[i] !== " ") {
            var letterObject = new Letter(currentWord[i]);
            this.newLetterArray.push(letterObject);
        }
        else {
            this.newLetterArray.push(" ");
        }
    }
}
// Method that displays this word
this.displayWord = function () {
    // Empty array to hold the letter and underscores
    var word = [];
    // Loop through the word and call on display function for each letter
    for (var i = 0; i < this.newLetterArray.length; i++) {
        // Only displays letter or underscore if it is not a space
        if (this.newLetterArray[i] !== " ") {
            var letterString = this.newLetterArray[i].display();
            word.push(letterString);
        }
        else {
            word.push(" ");
        }
    }
    // Displays word array as a string
    console.log(word.join(" "));
}
// Method that checks if user input matches any letters of the word
this.checkUserInput = function (input) {
    // Flag to track if any letters were guessed
    var correctGuess = false;
    // Loop through word and call on check letter function for each letter
    for (var i = 0; i < this.newLetterArray.length; i++) {
        if (this.newLetterArray[i] !== " ") {
            if (this.newLetterArray[i].checkLetter(input)) {
                // if any were guessed mark it as a correct guess
                correctGuess = true;
            }
        }
    }
    if (correctGuess) {
        return true;
    }
    else {
        return false;
    }
}


// Export the Word constructor to index.js
module.exports = Word;