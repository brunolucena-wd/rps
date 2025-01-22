let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.round(Math.random()*2))]
}

function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chose ${computerChoice}`);
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log("That's a tie.")
                    break;

                case "paper":
                    console.log("You lost.");
                    computerScore++;
                    break;

                case "scissors":
                    console.log("You win!");
                    humanScore++;
                    break;
            }
            break;

        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You win!")
                    humanScore++;
                    break;

                case "paper":
                    console.log("That's a tie.");
                    break;

                case "scissors":
                    console.log("You lost.");
                    computerScore++;
                    break;
            }
            break;

        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You lost.")
                    computerScore++;
                    break;

                case "paper":
                    console.log("You win!");
                    humanScore++;
                    break;

                case "scissors":
                    console.log("That's a tie.");
                    break;
            }
            break;

        default:
            console.log(`${humanChoice} is not a valid option.`);
    }
}

function playGame(rounds) {
    for (i = 1; i <= rounds; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}

let humanScore = 0;
let computerScore = 0;

let rounds = prompt("How many rounds would you like to play?");

playGame(rounds);
console.log(`Computer: ${computerScore}\nHuman: ${humanScore}`);