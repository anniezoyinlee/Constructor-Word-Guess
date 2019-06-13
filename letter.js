// Export the Letter constructor to word.js
// module.exports = Letter;
// The Letter constructor is responsible for displaying either an underscore or 
// the underlying character for each letter in the word

function Letter(character) {
    // If a character is not a letter, make it visible right away
    this.visible = !/[a-zA-Z]/i.test(character);
    // Save the underlying character
    this.character = character;
};

// Returns either an underscore or the underlying character depending on `this.visible`
// because we call this function toString, when we call `this.letters.join` in
// Word.js, JavaScript automatically uses the value we return here
Letter.prototype.toString = function () {
    if (this.visible === true) {
        return this.character;
    } else {
        return "_";
    }
};

Letter.prototype.getSolution = function () {
    return this.character;
};

Letter.prototype.guess = function (charGuess) {
    if (charGuess.toUpperCase() === this.character.toUpperCase()) {
        this.visible = true;
        return true;
    } else {
        return false;
    }
};

module.exports = Letter;