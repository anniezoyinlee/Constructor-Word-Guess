// Require the Word constructor that was exported from word.js
// npm i inquirer
const Word = require("./word.js");
const inquirer = require("inquirer");

// Set word array
const letterArray = "abcdefghijklmnopqrstuvwxyz";
const pinkColorArray =["Amethyst","Baby Pink","Bright Pink","Brownish Pink","Bubble Gum","Candy Pink","Carnation Pink","Charm Pink","Cherry Blossom","Cherry Pink","Cherry Tomato","Chestnut Rose","Chewing Gum","Conch Shell","Copper Penny","Crushed Raspberry","Crystal Pink","Dark Hot Pink","Dark Pink","Dark Raspberry","Deep Pink","Dull Pink","Dusty Pink","Electric Lavender","Electric Pink","Faded Pink","Faded Rose","Faded Violet","Floral Linen","Fluorescent Pink","Forgotten Pink","French Fuchsia","French Pink","Fuchsia","Geranium Pink","Gothic Amethyst","Grape Taffy","Grapefruit Juice","Greyish Pink","Hot Magenta","Hot Pink","Lavender Pink","Light Coral","Light Hot Pink","Light Lavender","Light Pink","Light Rose","Magenta","Maiden Pink","Mauve","Medium Pink","Mona Lisa","Myoga","Neon Fuchsia","Neon Pink","Nouveau Rose","Old Pink","Orange Pink","Orchid Pink","Pale Pink","Pastel Magenta","Pastel Pink","Peach Powder","Peach Shortcake","Pencil Eraser","Petite Pink","Pig Pink","Pink","Pink Chalk","Pink Chrysanthemum","Pink Clay","Pink Flamingo","Pink Ink","Pink Lily","Pink Linen","Pink Lotus","Pink Paper","Pink Pearl","Pink Sky","Pink Sugar","Pink Wood","Pinkish Purple","Plum","Plum Blossom","Powder Pink","Pretty in Pink","Princess Pink","Prism Pink","Prom","Purplish Pink","Quartz Pink","Quiet Pink","Radiant Rouge","Rainbow Pink","Raspberry Pink","Red Pink","Reddish Pink","Ripe Melon","Rose Pink","Rose Water","Rosy Pink","Royal Fuchsia","Sakura","Sakura Mochi","Salmon","Salmon Grey","Satin Pink","Scallop Shell","Sea Pink","Sepia Rose","Sheer Pink","Sheer Rosebud","Shell Pink","Shocking Pink","Silver Rust","Sky Magenta","Soap","Soft Cashmere","Soft Pink","Soft Satin","Solid Pink","Sparkling Pink","Spicy Pink","Steel Pink","Still Fuchsia","Stormy Pink","Strawberry Blonde","Strawberry Cream","Strawberry Frosting","Strawberry Glaze","Strawberry Ice","Strawberry Pink","Strong Pink","Sweet Pink","Tango Pink","Tapestry","Tinted Rosewood","True Love","Tulip","Ultra Pink","Very Berry","Violet Pink","Virtual Pink","Vivid Raspberry","Warm Pink","Watermelon Candy","Watermelon Pink","Watermelon Water","Wild Strawberry","Zephyr"];

// Pick random word from word array by using index
const randomIndex = Math.floor(Math.random() * pinkColorArray.length);
const randomWord = pinkColorArray[randomIndex];

// Pass random word that picked form word array
newWord = new Word(randomWord);

const requireNewWord = false;

// Guessed letters
const incorrectLetters = [];
const correctLetters = [];

// Guesses left
const guessesLeft = 15;

function wordGuess() {

    if (requireNewWord) {
        // Selects random word from pinkColorArray array
        const randomIndex = Math.floor(Math.random() * pinkColorArray.length);
        const randomWord = pinkColorArray[randomIndex];

        // Pass random word that picked form word array
        newWord = new Word(randomWord);
        requireNewWord = false;
    }

    const wordComplete = [];

    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Type a letter between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {

                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nTry again!🙃\n");
                    wordGuess();
                } else {

                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        wordGuess();
                    } else {
                        // Checks if guess is correct
                        const checkWord = [];
                        newWord.userGuess(input.userinput);

                        // Checks if guess is correct
                        newWord.objArray.forEach(wordCheck);
                        if (checkWord.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");
                           
                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");
                            correctLetters.push(input.userinput);
                        }

                        newWord.log();

                        // Print guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");

                        // Print letters already guessed
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        if (guessesLeft > 0) {
                            // Call function 
                            wordGuess();
                        } else {
                            console.log("Sorry, you lose!\n");
                            restartGame();
                        }

                        function wordCheck(key) {
                            checkWord.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!\n");
        restartGame();
    }
   
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }

}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Play again?",
                choices: ["Sure", "Exit"],
                name: "Restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                wordGuess();
            } else {
                return
            }
        })
}

wordGuess();