const range = prompt("Enter the Range ");

const randomNumber = Math.floor(Math.random() * range) + 1;

let input = prompt("Guess the number");

while (true) {
  if (input == "stop") {
    console.log("Game ended");
    break;
  } else if (parseInt(input) === randomNumber) {
    console.log(`Guessing is Correct ,random number was ${randomNumber}`);
    break;
  } else {
    input = prompt("Input Again");
  }
}
