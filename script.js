// let humanScore = 0;
// let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanchoice = prompt("Please enter rock, paper, or scissors:");
  return humanchoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `you choose ${humanChoice} and the computer choose ${computerChoice} so, its a draw`,
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `you choose ${humanChoice} and the computer choose ${computerChoice} so, you win!`,
    );
  } else {
    console.log(
      `you choose ${humanChoice} and the computer choose ${computerChoice} so, computer wins!`,
    );
  }
}
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
