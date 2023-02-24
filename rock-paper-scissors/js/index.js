const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
//com o querrySelectorAll, posso colocar uma variável para cada botão, no caso.
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //ou você pode usar possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you win!'
    }
}