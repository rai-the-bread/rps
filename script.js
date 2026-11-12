/*
Instead of having a form:
  - add event listener to each button
  -- when clicked, get computer choice, find winner, display on screen
  - if they also just click another image/button, it will play again with the new userChoice
  - play again button clears the result and does it again
*/

// save choice-containers as variables
const userRock = document.querySelector('#rock');
const userPaper = document.querySelector('#paper');
const userScissors = document.querySelector('#scissors');

// event listeners on images to call the findWinner function
userRock.addEventListener("click", () => findWinner("rock"));
userPaper.addEventListener("click", () => findWinner("paper"));
userScissors.addEventListener("click", () => findWinner("scissors"));

// save computer choice and result paragraph
const computerChoice = document.querySelector(".cp-choice")
const userChoice = document.querySelector(".user-choice")
const result = document.querySelector(".result");

function displayWinner(user, computer, winner) {
  console.log(winner);
  // add results to DOM
  userChoice.textContent = `You chose ${user}`
  computerChoice.textContent = `The computer chose ${computer}`
  result.textContent = winner;
}

function findWinner(user) {
  const computer = getComputerChoice();


  // determine winner
  if (user === computer) {
    winner = "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    winner = "You win!";
  } else {
    winner = "You lose!";
  }

  console.log(`User: ${user}\nComputer: ${computer}`);
  displayWinner(user, computer, winner);
}

function getComputerChoice() {
  // possible computer choices
  const choices = ["rock", "paper", "scissors"];

  // random number 0, 1, 2
  const random = (Math.random() * 2).toFixed();

  // use the random number as an index
  return choices[random];
}
