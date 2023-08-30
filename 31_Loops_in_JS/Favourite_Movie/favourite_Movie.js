let favMovie = "MS Dhoni";

let guess = prompt("Enter movie name :");

while (true) {
  if (favMovie == guess) {
    console.log("Matched");
    break;
  } else if (guess == "quit") {
    break;
  } else {
    guess = prompt(" ");
  }
}
