const rockBtn = document.querySelector('#rockbtn')
const paperBtn = document.querySelector('#paperbtn')
const scissorsBtn = document.querySelector('#scissorsbtn')

const scoreboard = document.querySelector('.scoreboard')
const announcer = document.querySelector('.announcer')

let playerPoint = 0
let pcPoint = 0

rockbtn.addEventListener('click', game)
paperbtn.addEventListener('click', game)
scissorsbtn.addEventListener('click', game)

function game(){
    announcer.innerHTML = ''
    let result = playRound(getComputerChoice(), 'Rock')
    if (result === 'true'){ 
        playerPoint += 1
        announcer.innerHTML = 'You Won!'
    }
    else if (result === 'false'){
        pcPoint += 1
        announcer.innerHTML = 'You Lost!'
    }
    else {
        playerPoint += 0
        announcer.innerHTML = 'You Tied!'
    }
    
    scoreCheck(playerPoint, pcPoint)
    scoreboard.innerHTML = `Your Score: ${playerPoint} VS PC Score: ${pcPoint}`
}

function scoreCheck(playerScore, pcScore){
    if (playerScore >= 5) {
        announcer.innerHTML = `Congratulations, you reached 5 points!`
        playerPoint = 0
        pcPoint = 0
    }
    else if (pcScore >=5) {
        announcer.innerHTML = `Unlucky, the computer reached 5 points!`
        playerPoint = 0
        pcPoint = 0
    }
}

function getComputerChoice() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection){
    let playerChoice = playerSelection.toUpperCase();

    if (playerChoice === 'ROCK' && computerSelection === 'Rock') {
        return null
    } else if (playerChoice === 'ROCK' && computerSelection === 'Paper') {
        return 'false'
    } else if (playerChoice === 'ROCK' && computerSelection === 'Scissors') {
        return 'true'
    } else if (playerChoice === 'PAPER' && computerSelection === 'Paper') {
        return null
    } else if (playerChoice === 'PAPER' && computerSelection === 'Scissors') {
        return 'false'
    } else if (playerChoice === 'PAPER' && computerSelection === 'Rock'){
        return 'true'
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'Scissors'){
        return null
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'Rock'){
        return 'false'
    } else {
        return 'true'
    }
}
