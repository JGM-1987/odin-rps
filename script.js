function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function getRandomChoice() {
    switch (Math.ceil(Math.random() * 3))  {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
   }
}

function game() {
    const scoreToWin = 5;
    let playerScore = 0;
    let computerScore = 0;
    let gameOver = false;
    let counter = 1;

    do {
        let playerSelection;
        let computerSelection;
        let roundWinner;

        do {
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            computerSelection = getRandomChoice();
            roundWinner = getRoundWinner(playerSelection, computerSelection);
            let message = `Round ${counter}: `;

            switch (roundWinner) {
                case "tie":
                    message += "Tied! Play another round.";
                    break;
                case "player":
                    playerScore++;
                    message += "You Win! ";
                    message += playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1));
                    message += " beats " + computerSelection + ".";
                    break;
                case "computer":
                    computerScore++;
                    message += "You Lose! ";
                    message += computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1));
                    message += " beats " + playerSelection + ".";
                    break;
            }
            console.log(message);
            counter++;

        } while (roundWinner === "tie")

        gameOver = Math.max(playerScore, computerScore) === scoreToWin;

    } while (!gameOver)

    console.log("Result:", playerScore === scoreToWin ? "YOU WIN!" : "YOU LOSE!");
}

game();