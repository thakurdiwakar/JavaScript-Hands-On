// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("CLicked");
// });
let btn = document.querySelector("button");

let h1 = document.querySelector("h1");
let p1 = document.querySelector("p");

btn.addEventListener("click", function () {
  //   console.log(this); //it will print button

  // console.dir(this);
  console.dir(this.innerText);

  this.style.color = "blue";
});

h1.addEventListener("click", function () {
  console.dir(this.innerText);

  this.style.color = "blue";
});

p1.addEventListener("click", function () {
  console.dir(this.innerText);

  this.style.color = "blue";
});
