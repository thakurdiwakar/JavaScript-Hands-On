let form = document.querySelector("form");
//submit event
form.addEventListener("submit", function (event) {
  // alert("Form Submitted");

  event.preventDefault();

  // let input = document.querySelector("input");

  // console.log(input);

  // console.log(input.value);
  // console.log(input.innerText);
});
//change event//


// let user = document.querySelector("#user");

// user.addEventListener("change", function (event) {
//   console.log("Input Chnaged");
//   console.log("Value", user.value);
// });

//input event

let user = document.querySelector("#user");

user.addEventListener("input", function (event) {
  console.log("Input ");
  console.log("Value", user.value);
});

