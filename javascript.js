function getComputerChoice() {
    const pcChoice = ["Rock","Paper","Scissors"];
    return pcChoice[Math.floor(Math.random() * 2)];
}

console.log(getComputerChoice());