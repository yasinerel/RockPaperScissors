function getComputerChoice() {
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
        results();
    }if(playerSelection == "rock" && computerSelection == "paper" ){
        console.log("Computer Win! Paper beats Rock");
        computer = computer + 1;
        results();
    }if(playerSelection == "rock" && computerSelection == "scissors" ){
        console.log("Player Win! Rock beats Scissors");
        player = player + 1;
        results();
    }if(playerSelection == "paper" && computerSelection == "rock" ){
        console.log("Player Win! Paper beats Rock");
        player = player + 1;
        results();
    }if(playerSelection == "paper" && computerSelection == "paper" ){
        console.log("Draw! Again");
        results();
    }if(playerSelection == "paper" && computerSelection == "scissors" ){
        console.log("Computer Win! Scissors beats Paper");
        computer = computer + 1;
        results();
    }if(playerSelection == "scissors" && computerSelection == "rock" ){
        console.log("Computer Win! Rock beats Scissors");
        computer = computer + 1;
        results();
    }if(playerSelection == "scissors" && computerSelection == "paper" ){
        console.log("Player Win! Scissors beats Paper");
        player = player + 1;
        results();
    }if(playerSelection == "scissors" && computerSelection == "scissors" ){
        console.log("Draw! Again");
        results();
    }
}
 function game(){
    const btnR = document.querySelector('#rock');
    btnR.addEventListener('click', () => {
      playRound("rock", getComputerChoice().toLowerCase());
      
    });
    const btnP = document.querySelector('#paper');
    btnP.addEventListener('click', () => {
        playRound("paper", getComputerChoice().toLowerCase());
    });
    
    const btnS = document.querySelector('#scissors');
    btnS.addEventListener('click', () => {
        playRound("scissors", getComputerChoice().toLowerCase());
    });
}


function results(){
    document.getElementById("resultsOfTheGame").innerHTML =  ("Player's score is " + player + " Computer's score is " + computer);
    console.log("*********||*********");


    if(computer == 5){
        document.getElementById("resultsOfTheGame").innerHTML = ("???????????? COMPUTER WINNER! ????????????");

    }
    if(player == 5){
        document.getElementById("resultsOfTheGame").innerHTML = ("???????????? PLAYER WINNER! ????????????");

    }

}

game();

