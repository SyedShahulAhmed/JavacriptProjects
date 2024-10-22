const buttons = document.querySelectorAll("button");

const resultEL = document.querySelector(".win");

const player = document.getElementById("player");

const computer = document.getElementById("comp");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEL.innerHTML = result;
    
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSel, computerSel) {
  if (playerSel === computerSel) {
    return "It's a tie!";
  } else if (
    (playerSel === "rock" && computerSel === "scissors") ||
    (playerSel === "paper" && computerSel === "rock") ||
    (playerSel === "scissors" && computerSel === "paper")
  ) {
    playerScore++;
    player.textContent = playerScore;
    return `You win! ${playerSel}  beats ${computerSel}`;
  } else {
    computerScore++;
    computer.textContent = computerScore;
    return `You lose! ${computerSel} beats ${playerSel}`;
  }
}