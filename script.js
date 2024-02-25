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
    let userGuess = Number(guess.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congradulations Buddy You got it✔️"
        lastResult.style.backgroundColor = "green";
        loworHi.textContent = ""
        gameOver()

    } else if (guessCount === 10) {
        lastResult.textContent = "Game Over!!"
        gameOver()
    } else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red";
    }
    if (userGuess < randomNumber) {
        loworHi.textContent = "Guess was too low"
    } else if(userGuess>randomNumber) {
        loworHi.textContent = "Guess was too high"

    }

    guessCount++;
    guess.value = '';
    guess.focus();
   
}
submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    checkGuess();
    guess.value = '';
});

function gameOver() {
    guess.disabled = true;
    submit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}
function resetGame() {
    guessCount = 1;
    let results = document.querySelectorAll(".results p");
    for (let i = 0; i < results.length; i++) {
        results[i].textContent = '';
    }
    guesses.textContent = ''; // Clear previous guesses
    resetButton.parentNode.removeChild(resetButton);
    guess.disabled = false;
    submit.disabled = false;
    guess.value = '';
    guess.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}




