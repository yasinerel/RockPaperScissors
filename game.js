console.log("yasins");

function getComputerChoice() {
    //Rock’, ‘Paper’ or ‘Scissors’
    const array = ["rock", "paper" ,  "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];

    return item;
  }

function playRound(playerSelection, computerSelection){

    if(playerSelection == "rock" && computerSelection == "rock" ){
        console.log("Deal! Again");
    }if(playerSelection == "rock" && computerSelection == "paper" ){
        console.log("Computer Win! Paper beats Rock");
    }if(playerSelection == "rock" && computerSelection == "scissors" ){
        console.log("Player Win! Rock beats Scissors");
    }if(playerSelection == "paper" && computerSelection == "rock" ){
        console.log("Player Win! Paper beats Rock");
    }if(playerSelection == "paper" && computerSelection == "paper" ){
        console.log("Deal! Again");
    }if(playerSelection == "paper" && computerSelection == "scissors" ){
        console.log("Computer Win! Scissors beats Paper");
    }if(playerSelection == "scissors" && computerSelection == "rock" ){
        console.log("Computer Win! Rock beats Scissors");
    }if(playerSelection == "scissors" && computerSelection == "paper" ){
        console.log("Player Win! Scissors beats Paper");
    }if(playerSelection == "scissors" && computerSelection == "scissors" ){
        console.log("Deal! Again");
    }


}

//let playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase();

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));