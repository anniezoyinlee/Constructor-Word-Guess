// Construct for letters
function Letter(letter) {
    this.letter = letter;
    this.userGuess = false;

    // Method that displays the character or an underscore
    this.display = function () {
        // If the letter has been guessed, return the letter 
        if (this.userGuess === true) {
            return this.letter.toUpperCase();
        }
        // If the letter has not been guessed, return an underscore;
        else {
            return "_";
        }
    }
    // Method that check if user input is the same as the letter
    this.checkLetter = function (userInput) {
        if (userInput.toLowerCase() === this.letter.toLowerCase()) {
            this.userGuess = true;
        }
        else {
            return false;
        }
    }
}

// Export the Letter constructor to word.js
module.exports = Letter;