function getComputerChoice() {
    let num = Math.random();
    console.log(num);
    if (num <= 0.3) {
        return "rock";
    } else if (num <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let isValidInput = false;
    let choice = "";
    while (isValidInput == false) {
        choice = prompt("Choose 'rock', 'paper', scissors'");
        choice = choice.toLowerCase();
        isValidInput = checkValidChoice(choice);
    }
    return choice;
}

function checkValidChoice(choice) {
    let validChoice = ["rock", "paper", "scissors"];
    return validChoice.includes(choice);
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's both Rock, its a draw!");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors.")
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Papers beats Rock.");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("It's both Paper, its a draw!");
            } else {
                console.log("You lose! Scissors beats Paper.")
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            } else {
                console.log("It's both Scissors, its a draw!")
            }
            break;
    }
}

function playGame() {
    for (i = 1; i <= 5 ; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game finished!");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore < computerScore) {
        console.log("You lose!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("It's a draw!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

