
function getComputerChoice() {
    //Rock’, ‘Paper’ or ‘Scissors’
    const array = ["rock", "paper" ,  "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];

    return item;
  }

let player = 0;
let computer = 0;

function playRound(playerSelection, computerSelection){

    if(playerSelection == "rock" && computerSelection == "rock" ){
        console.log("Draw! Again");
    }if(playerSelection == "rock" && computerSelection == "paper" ){
        console.log("Computer Win! Paper beats Rock");
        computer ++;
    }if(playerSelection == "rock" && computerSelection == "scissors" ){
        console.log("Player Win! Rock beats Scissors");
        player ++;
    }if(playerSelection == "paper" && computerSelection == "rock" ){
        console.log("Player Win! Paper beats Rock");
        player ++;
    }if(playerSelection == "paper" && computerSelection == "paper" ){
        console.log("Draw! Again");
    }if(playerSelection == "paper" && computerSelection == "scissors" ){
        console.log("Computer Win! Scissors beats Paper");
        computer ++;
    }if(playerSelection == "scissors" && computerSelection == "rock" ){
        console.log("Computer Win! Rock beats Scissors");
        computer ++;
    }if(playerSelection == "scissors" && computerSelection == "paper" ){
        console.log("Player Win! Scissors beats Paper");
        player ++;
    }if(playerSelection == "scissors" && computerSelection == "scissors" ){
        console.log("Draw! Again");
    }
}



//console.log(playRound(playerSelection, computerSelection));


 function game(){
    const result = [];
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection,computerSelection);

        console.log("Player's score is " + player + " Computer's score is " + computer);

    }

}





game();