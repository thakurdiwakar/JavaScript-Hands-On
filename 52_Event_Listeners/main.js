// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("CLicked");
// });
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  //   console.log(this); //it will print button

  // console.dir(this);
  console.dir(this.innerText);

  this.style.color = "blue";
});
