import randomInteger from "random-int";
import PromptSync from "prompt-sync";

//The Available Choices
let choices = ["rock","paper","scissors"]

// These will be the messages that are shown to the user
let userPrompt = "0 for rock ,1 for paper, or 2 for scissors  "
let outcome = "ready to play"

// Computer Choses Randomly
let computerChoice = randomInteger(0,2);
computerChoice = choices[computerChoice];

// Promp the user for an input
const prompt = PromptSync();
let userInput = prompt(userPrompt);
let userChoices = choices[userInput];

if (computerChoice === userChoices) {
    outcome ="draw"
} else if (computerChoice === "rock" && userChoices === "paper") {
    outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoices === "scissors") {
    outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoices === "rock") {
    outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoices === "scissors") {
    outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoices === "rock") {
    outcome = "Player Wins";    
} else if (computerChoice === "scissors" && userChoices === "paper") {
    outcome = "Computer Wins";    
}

console.log("Computer Chooses  " + computerChoice);
console.log("Player Chooses  " + userChoices);
console.log(outcome);

