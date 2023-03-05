console.log("yasins");

function getComputerChoice() {
    //Rock’, ‘Paper’ or ‘Scissors’
    const array = ["Rock", "Paper" ,  "Scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];

    return item;
  }

function playTheGame(computerChoice, playerChoice){
    let playerChoice = prompt("Choose: Rock, Paper or Scissors");
    let computerChoice = getComputerChoice();
    
}