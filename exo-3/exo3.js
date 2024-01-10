// you can write js here
console.log('exo-3');

let playerInput = prompt("your choice (rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {

    let playerChoice = playerInput.toLowerCase();

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" || playerChoice == "bomb") {

        return playerInput;
    } else {
        console.log("choix non reconnu");
        return false;
    }

}

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3 );
    console.log(choices[random]);
    return choices[random];

}

function findWinner(playerChoice, ComputerChoice) {

    if (playerChoice == "bomb") {

        return "Won";

    }else{

        if (playerChoice == ComputerChoice) {
            return "Tied"
        } else {
            if (playerChoice == "rock") {

                switch (ComputerChoice) {
                    case "paper":
                        return "Lost";
                    case "scissors":
                        return "Won"
                }
            } else if (playerChoice == "paper") {

                switch (ComputerChoice) {
                    case "rock":
                        return "Won";
                    case "scissors":
                        return "Lost"
                }
            } else if (playerChoice == "scissors") {

                switch (ComputerChoice) {
                    case "paper":
                        return "Won";
                    case "rock":
                        return "Lost"
                }
            }
        }
    }
}

function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    let ComputerChoice = getComputerChoice();
    console.log(findWinner(uChoice, ComputerChoice));
}

playGame();
