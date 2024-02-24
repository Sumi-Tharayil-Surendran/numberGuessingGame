let randomNumber = Math.floor(Math.random() * 100) + 1

let guesses = document.querySelector(".guesses")
let lastResult = document.querySelector(".lastResult")
let loworHi = document.querySelector(".loworHi")
let guess = document.querySelector(".guess")
let submit = document.querySelector(".submit")

guess.value = ''
guess.focus()
let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guess.value);
    console.log(userGuess)
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:"
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congradulations Buddy You got it right"
        lastResult.style.backgroundColor = "green";
        loworHi = ""
        gameOver()

    } else if (guessCount === 10) {
        lastResult.textContent = "Game Over!!"
        gameOver()
    } else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red";
    }
    if (guessCount < randomNumber) {
        loworHi.textContent = "Guess was too low"
    } else {
        loworHi.textContent = "Guess was too high"

    }

    guessCount++;
    guess.value = '';
    guess.focus();

}
function gameOver() {
    guess.disabled = true;
    submit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}
// 




submit.addEventListener('click', checkGuess)
//  console.log(userGuess);

