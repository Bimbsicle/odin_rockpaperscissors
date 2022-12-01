const rockBtn = document.querySelector('#rockbtn')
const paperBtn = document.querySelector('#paperbtn')
const scissorsBtn = document.querySelector('#scissorsbtn')

const scoreboard = document.querySelector('.scoreboard')
const announcer = document.querySelector('.announcer')
const instructions = document.querySelector('.instructions')

let playerPoint = 0
let pcPoint = 0

instructions.innerHTML = 'Choose a move against the PC'

rockbtn.addEventListener('click',() => {
    game('Rock')
})
paperbtn.addEventListener('click', () => {
    game('Paper')
})
scissorsbtn.addEventListener('click', () => {
    game('Scissors')
})

function game(playerAnswer){
    instructions.innerHTML = 'Choose your next Move'
    let point = ''
    let outcome = playRound(getComputerChoice(), playerAnswer)
    winnerAnnounce(outcome)
    scoreboard.innerHTML = `Your Score: ${playerPoint} VS PC Score: ${pcPoint}`
}

function winnerAnnounce(result) {
    if (result === 'true1') {
        announcer.innerHTML = 'Rock beats Scissors you won!'
        playerPoint += 1
    } else if (result === 'false1') {
        announcer.innerHTML = 'Paper beats Rock you lost!'
        pcPoint += 1
    } else if (result === 'null1') {
        announcer.innerHTML = 'You both chose Rock it\'s a tie!'
        playerPoint += 0
    } else if (result === 'true2') {
        announcer.innerHTML = 'Paper beats Rock you won!'
        playerPoint += 1
    } else if (result === 'false2') {
        announcer.innerHTML = 'Scissors beats Paper you lost!'
        pcPoint += 1
    } else if (result === 'null2') {
        announcer.innerHTML = 'You both chose Paper it\'s a tie!'
        playerPoint += 0
    } else if (result === 'true3') {
        announcer.innerHTML = 'Scissors beats Paper you won!'
        playerPoint += 1
    } else if (result === 'false3') {
        announcer.innerHTML = 'Rock beats Scissors you lost!'
        pcPoint += 1
    } else {
        announcer.innerHTML = 'You both chose Scissors it\'s a tie!'
        playerPoint += 0
    }
    scoreCheck(playerPoint, pcPoint)
}

function scoreCheck(playerScore, pcScore){
    if (playerScore >= 5) {
        announcer.innerHTML = `Congratulations, you reached 5 points!`
        instructions.innerHTML = 'Choose an answer against the PC'
        playerPoint = 0
        pcPoint = 0
    }
    else if (pcScore >=5) {
        announcer.innerHTML = `Unlucky, the computer reached 5 points!`
        instructions.innerHTML = 'Choose an answer against the PC'
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
        return 'null1'
    } else if (playerChoice === 'ROCK' && computerSelection === 'Paper') {
        return 'false1'
    } else if (playerChoice === 'ROCK' && computerSelection === 'Scissors') {
        return 'true1'
    } else if (playerChoice === 'PAPER' && computerSelection === 'Paper') {
        return 'null2'
    } else if (playerChoice === 'PAPER' && computerSelection === 'Scissors') {
        return 'false2'
    } else if (playerChoice === 'PAPER' && computerSelection === 'Rock'){
        return 'true2'
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'Scissors'){
        return 'null3'
    } else if (playerChoice === 'SCISSORS' && computerSelection === 'Rock'){
        return 'false3'
    } else {
        return 'true3'
    }
}
