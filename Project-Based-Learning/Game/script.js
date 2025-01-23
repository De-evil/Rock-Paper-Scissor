// Rock - Paper - Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoices) {
  const computerChoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoices === computerChoices) {
    result = " It's a TIE !!!";
  } else {
    switch (playerChoices) {
      case "rock":
        result =
          computerChoices === "scissors" ? "You Win !!!" : "You LOSE !!!";
        break;
      case "paper":
        result = computerChoices === "rock" ? "You Win !!!" : "You LOSE !!!";
        break;
      case "scissors":
        result = computerChoices === "paper" ? "You Win !!!" : "You LOSE !!!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER:${playerChoices}`;
  computerDisplay.textContent = `COMPUTER:${computerChoices}`;
  resultDisplay.textContent = result; 

  resultDisplay.classList.remove = ("greenText","redText");

  switch (result) {
    case "You Win !!!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You LOSE !!!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    // case "It's a TIE !!!":
    //   resultDisplay.classList.add("yellowText");
    //   break;
  }
}
