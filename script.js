function getComputerChoice() {
  let randomNum = Math.random();

    if (randomNum < 1/3){
      return "rock";
    } else if (randomNum < 2/3){
      return "paper";
    } else {
      return "scissors";
    }
}

function getHumanChoice(){
  let humanChoice = prompt("'r' for rock, 'p' for paper, 's' scissors?");
  return humanChoice;
}

let humanScore = 0,
computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice.charAt(0) === 'r') {
    humanChoice = 'rock';
  } else if (humanChoice.charAt(0) === 'p') {
      humanChoice = 'paper';
  } else if (humanChoice.charAt(0) === 's') {
      humanChoice = 'scissors';
  }

  console.log(`You choose ${humanChoice}, computer choose ${computerChoice}.`)

  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log("You win, rock beats scissors!");
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper'){
    console.log("You lose, paper beats rock!");
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock'){
    console.log("You win, paper beats rock!");
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
    console.log("You lose, scissors beats paper!");
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log("You win, scissors beats paper!");
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
    console.log("You lose, rock beats scissors!");
    computerScore++;
  } else {
    console.log(`It's a tie! You and computer both chose ${humanChoice}. `);
  }
}

function playGame(){
  for (let i = 0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // console.log(computerChoice);
    console.log(`Round ${i + 1}`);
    playRound(humanChoice, computerChoice);
  }
  console.log(`Human: ${humanScore}, Computer: ${computerScore}.`);
  if (humanScore > computerScore){
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie.");
  }
}

playGame();