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
computerScore = 0, round = 1;

//img srcs
const playerRock = './img/player_rock.PNG';
const playerPaper = './img/player_paper.PNG';
const playerScissors = './img/player_scissors.PNG';
const computerRock = './img/computer_rock.PNG';
const computerPaper = './img/computer_paper.PNG';
const computerScissors = './img/computer_scissors.PNG';
//

function playRound(humanChoice, computerChoice){

  round++;

  console.log(`You choose ${humanChoice}, computer choose ${computerChoice}.`)

  let playerWon = false, tie = false;

  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    setImgSrc(playerRock, computerScissors);
    console.log("You win, rock beats scissors!");
    playerWon = true;
  } else if (humanChoice === 'rock' && computerChoice === 'paper'){
    setImgSrc(playerRock, computerPaper);
    console.log("You lose, paper beats rock!");
  } else if (humanChoice === 'paper' && computerChoice === 'rock'){
    setImgSrc(playerPaper, computerRock);
    playerWon = true;
    console.log("You win, paper beats rock!");
  } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
    setImgSrc(playerPaper, computerScissors);
    console.log("You lose, scissors beats paper!");
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
    setImgSrc(playerScissors, computerPaper);
    playerWon = true;
    console.log("You win, scissors beats paper!");
  } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
    setImgSrc(playerScissors, computerRock);
    console.log("You lose, rock beats scissors!");
  } else {
    tie = true;
    if (humanChoice === 'rock'){
      setImgSrc(playerRock, computerRock);
    } else if (humanChoice === 'paper'){
      setImgSrc(playerPaper, computerPaper);
    } else {
      setImgSrc(playerScissors, computerScissors);
    }
    console.log(`It's a tie! You and computer both chose ${humanChoice}. `);
  }

  if (tie){
    resultTitle.textContent = tieRoundText;
    playerPlusOne.classList.remove('show-plus');
    computerPlusOne.classList.remove('show-plus');
  } else if (playerWon){
    resultTitle.textContent = winRoundText;
    humanScore++;
    playerPlusOne.classList.add('show-plus');
    computerPlusOne.classList.remove('show-plus');
    console.log("haha")
  } else {
    resultTitle.textContent = loseRoundText;
    computerScore++;
    playerPlusOne.classList.remove('show-plus');
    computerPlusOne.classList.add('show-plus');
    console.log('huhu');
  }

  playerScoreModal.textContent = `${humanScore}`;
  computerScoreMdal.textContent = `${computerScore}`;
}

//modal elements
const resultTitle = document.querySelector('#resultTitle');
const playerChoice = document.querySelector('#playerChoice'), 
computerChoice = document.querySelector('#computerChoice'),
totalPlayerScore = document.querySelector('#playerScore'),
totalComputerScore = document.querySelector('#computerScore'),
playerPlusOne = document.querySelector('.player'),
computerPlusOne = document.querySelector('.computer'),
playerScoreModal = document.querySelector('#playerScoreModal'),
computerScoreMdal = document.querySelector('#computerScoreModal');
//

function setImgSrc(playerChoiceSrc, computerChoiceSrc){
  if (!playerChoice || !computerChoice) {
    console.error('playerChoice or computerChoice elements not found');
    return;
  }
  
  playerChoice.setAttribute('src', playerChoiceSrc);
  computerChoice.setAttribute('src', computerChoiceSrc);
}

const winRoundText = 'You win the round!',
loseRoundText = 'You lose the round!',
tieRoundText = "It's a tie!";
let result = '';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


const rpsButtons = document.querySelector('#rpsButtons');
const modalContainer = document.querySelector('.modal-container');
const nextRoundButton = document.querySelector('#nextRound');

rpsButtons.addEventListener('click', (event) =>{
  let target = event.target;
  let computerChoice = getComputerChoice();
  let button = event.target.closest('.choice-buttons'); // Find the button (ai help)

  switch (button.id){
    case 'rock':
      playRound('rock', computerChoice);
      break;
    case 'paper':
      playRound('paper', computerChoice);
      break;
    case 'scissors':
      playRound('scissors', computerChoice);
      break;
  }

  modalContainer.classList.add('show');
});

nextRoundButton.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
})



console.log("test");
console.log('rpsButtons element:', rpsButtons);
console.log('Does it exist?', !!rpsButtons);









// function playGame(){
//   for (let i = 0; i < 5; i++){
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();

//     // console.log(computerChoice);
//     console.log(`Round ${i + 1}`);
//     playRound(humanChoice, computerChoice);
//   }
//   console.log(`Human: ${humanScore}, Computer: ${computerScore}.`);
//   if (humanScore > computerScore){
//     console.log("Human wins!");
//   } else if (computerScore > humanScore) {
//     console.log("Computer wins!");
//   } else {
//     console.log("It's a tie.");
//   }
// }

// playGame();