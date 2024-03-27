#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Saad - number guessing game");

const randomNumber = Math.floor(Math.random()*5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You guessed the correct number");
}
else{
    console.log("Sorry, you guessed the wrong number");
}