const playerChoice = document.querySelector('#playerchoice');
const computerChoice = document.querySelector('#computerchoice');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerresult');
const computerScore = document.querySelector('#computerresult');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');

let playerOption = '';
let computerOption = '';
let playerPoints = 0;
let computerPoints = 0;

playerScore.textContent = playerPoints;
computerScore.textContent = computerPoints;

function playComputer() {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerOption = 'rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerOption = 'paper';
  } else {
    computerOption = 'scissors';
  }
  computerChoice.textContent = computerOption;
  return computerOption;
}

function playGame(playerOption) {
  playComputer();
  if (playerOption === computerOption) {
    result.textContent = 'TIE';
  } else if (
    (playerOption === 'rock' && computerOption === 'scissors') ||
    (playerOption === 'paper' && computerOption === 'rock') ||
    (playerOption === 'scissors' && computerOption == 'paper')
  ) {
    result.textContent = 'You win';
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else {
    result.textContent = 'You lose';
    computerPoints++;
    computerScore.textContent = computerPoints;
  }
  playerChoice.textContent = playerOption;
}

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  playerChoice.textContent = '';
  computerChoice.textContent = '';
  result.textContent = '';
}

rockBtn.addEventListener('click', () => {
  playGame('rock');
});
paperBtn.addEventListener('click', () => {
  playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
});
resetBtn.addEventListener('click', reset);
