let randomNumber = Math.floor(Math.random()*100)+1

let guesses = document.querySelector(".guesses")
let lastResult = document.querySelector(".lastResult")
let loworHi = document.querySelector(".loworHi")
let guess = document.querySelector(".guess")
let submit = document.querySelector(".submit")

guess.focus()
let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guess.value);
    console.log(userGuess)
    if(guessCount=== 1) {
    guesses.textContent = "Previous guesses:"
    }
    guesses.textContent += userGuess + ' ';
}
// 




submit.addEventListener('click',checkGuess)
//  console.log(userGuess);

