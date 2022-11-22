function getComputerChoice() {
    const pcChoice = ["Rock","Paper","Scissors"];
    return pcChoice[Math.floor(Math.random() * 2)];
}

function playRound(computerSelection, playerSelection){
    let playerChoice = playerSelection.toUpperCase();

    if (playerChoice === "ROCK" && computerSelection === "Rock") {
        let result = "Tie! You both chose Rock"
        return result;
    } else if (playerChoice === "ROCK" && computerSelection === "Paper") {
        let result = "You Lose! Paper beats Rock"
        return result;
    } else if (playerChoice === "ROCK" && computerSelection === "Scissors") {
        let result = "You Win! Rock beats Scissors"
        return result;
    } else if (playerChoice === "PAPER" && computerSelection === "Paper") {
        let result = "Tie! You both chose Paper"    
        return result;
    } else if (playerChoice === "PAPER" && computerSelection === "Scissors") {
        let result = "You Lose! Scissor beats Paper"
        return result;
    } else if (playerChoice === "PAPER" && computerSelection === "Rock"){
        let result = "You Win! Paper beats Rock"
        return result;
    } else if (playerChoice === "SCISSORS" && computerSelection === "Scissors"){
        let result = "Tie! You both chose Scissors"
        return result;
    } else if (playerChoice === "SCISSORS" && computerSelection === "Rock"){
        let result = "You Lose! Rock beats Scissors"
        return result;
    } else {
        let result = "You Win! Scissors beats Paper"
        return result;
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), prompt("Please enter your choice:")));
     }
}

game()
