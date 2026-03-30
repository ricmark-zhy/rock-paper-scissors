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

let humanScore = 0,
computerScore = 0, round = 1;

//img srcs
const playerRock = './img/player_rock.PNG';
const playerPaper = './img/player_paper.PNG';
const playerScissors = './img/player_scissors.PNG';
const playerWinImg = './img/player_win.png';
const playerLoseImg = './img/player_lose.png';
const playerTieImg = './img/player_tie.png';

const computerRock = './img/computer_rock.PNG';
const computerPaper = './img/computer_paper.PNG';
const computerScissors = './img/computer_scissors.PNG';
const computerWinImg = './img/computer_win.PNG';
const computerLoseImg = './img/computer_lose.PNG';
const computerTieImg = './img/computer_tie.PNG';

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

    resultTitle.textContent = `Round ${round - 1}: `+tieRoundText;
    playerPlusOne.classList.remove('show-plus');
    computerPlusOne.classList.remove('show-plus');

    playerReact.setAttribute('src', playerTieImg);
    computerReact.setAttribute('src', computerTieImg);

  } else if (playerWon){

    resultTitle.textContent = `Round ${round - 1}: `+winRoundText;
    humanScore++;
    playerPlusOne.classList.add('show-plus');
    computerPlusOne.classList.remove('show-plus');

    playerReact.setAttribute('src', playerWinImg);
    computerReact.setAttribute('src', computerLoseImg);

  } else {

    resultTitle.textContent = `Round ${round - 1}: `+loseRoundText;
    computerScore++;
    playerPlusOne.classList.remove('show-plus');
    computerPlusOne.classList.add('show-plus');
    console.log('huhu');
    playerReact.setAttribute('src', playerLoseImg);
    computerReact.setAttribute('src', computerWinImg);

  }

  playerScoreModal.textContent = `${humanScore}`;
  computerScoreMdal.textContent = `${computerScore}`;
  

  if (round === 6){
    humanScore = 0;
    computerScore = 0;
    round = 1;
  }

  roundCount.textContent = `${round}`;
  setTimeout(() => {
    playerReact.classList.add('show');
    computerReact.classList.add('show');
  }, 1500);
}

//round result modal elements
const resultTitle = document.querySelector('#resultTitle');
const playerChoice = document.querySelector('#playerChoice'), 
computerChoice = document.querySelector('#computerChoice'),
totalPlayerScore = document.querySelector('#playerScore'),
totalComputerScore = document.querySelector('#computerScore'),
playerPlusOne = document.querySelector('.player'),
computerPlusOne = document.querySelector('.computer'),
playerScoreModal = document.querySelector('#playerScoreModal'),
computerScoreMdal = document.querySelector('#computerScoreModal');
const nextRoundButton = document.querySelector('#nextRound');
const playerReact = document.querySelector('#playerReact');
const computerReact = document.querySelector('#computerReact');
const reactionImages = document.querySelectorAll('.reaction-images');
//

function setImgSrc(playerChoiceSrc, computerChoiceSrc){
  if (!playerChoice || !computerChoice) {
    console.error('playerChoice or computerChoice elements not found');
    return;
  }
  
  playerChoice.setAttribute('src', playerChoiceSrc);
  computerChoice.setAttribute('src', computerChoiceSrc);
}

const winRoundText = 'You win!',
loseRoundText = 'You lose!',
tieRoundText = "Tabla!";
let result = '';


//main page elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const rpsButtons = document.querySelector('#rpsButtons');
const modalContainer = document.querySelector('.modal-container');
const roundCount = document.querySelector('#roundCount');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

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
  playerScoreText.textContent = `${humanScore}`;
  computerScoreText.textContent = `${computerScore}`;
  playerReact.classList.remove('show');
  computerReact.classList.remove('show');
})

function showReaction() {
    reactionImages.forEach(img => {
        img.classList.add('show');
    });
}
//Todo
// 1. Add a match result modal
// 2. Add a tie breaker if score is tie in last round
