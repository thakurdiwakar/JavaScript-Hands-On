// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("CLicked");
// });
let btn = document.querySelector("button");

let h1 = document.querySelector("h1");
let p1 = document.querySelector("p");
function changeColor() {
  console.dir(this.innerText);

  this.style.color = "blue";
}

btn.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

p1.addEventListener("click", changeColor);
