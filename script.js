let choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[(Math.round(Math.random()*2))]
}

function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    return humanChoice;
}

const scoreShowcase = document.createElement("div");
scoreShowcase.textContent = "Score";
document.querySelector("body").appendChild(scoreShowcase);

function playRound(humanChoice, computerChoice) {
    scoreShowcase.textContent = `Computer chose ${computerChoice}`;
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    scoreShowcase.textContent = "That's a tie.";
                    break;

                case "paper":
                    scoreShowcase.textContent = "You lost.";
                    computerScore++;
                    break;

                case "scissors":
                    scoreShowcase.textContent = "You win!";
                    humanScore++;
                    break;
            }
            break;

        case "paper":
            switch(computerChoice) {
                case "rock":
                    scoreShowcase.textContent = "You win!";
                    humanScore++;
                    break;

                case "paper":
                    scoreShowcase.textContent = "That's a tie.";
                    break;

                case "scissors":
                    scoreShowcase.textContent = "You lost.";
                    computerScore++;
                    break;
            }
            break;

        case "scissors":
            switch(computerChoice) {
                case "rock":
                    scoreShowcase.textContent = "You lost.";
                    computerScore++;
                    break;

                case "paper":
                    scoreShowcase.textContent = "You win!";
                    humanScore++;
                    break;

                case "scissors":
                    scoreShowcase.textContent = "That's a tie.";
                    break;
            }
            break;

        default:
            scoreShowcase.textContent = `${humanChoice} is not a valid option.`;
    }
    if (humanScore < 5 && computerScore < 5) {
        scoreShowcase.textContent += `Computer: ${computerScore} Human: ${humanScore}`;
    } else if (humanScore == 5) {
        scoreShowcase.textContent = "Human wins!";
        return;
    } else if (computerScore == 5) {
        scoreShowcase.textContent = "Computer wins!";
        return;
    }
}

function playGame(rounds) {
    for (i = 1; i <= rounds; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    })
})

// let rounds = prompt("How many rounds would you like to play?");


// scoreShowcase.textContent = `Computer: ${computerScore}\nHuman: ${humanScore}`;