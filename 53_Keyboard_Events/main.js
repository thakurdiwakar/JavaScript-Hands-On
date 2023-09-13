// let btn = document.querySelector("button");

let inp = document.querySelector("input");

// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Single CLicked");
// });

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("Double CLicked");
// });

// inp.addEventListener("keydown", function (event) {
//   console.log("Key: ", event.key);
//   console.log("Code: ", event.code);
//   console.log("Key entered");
// });

// inp.addEventListener("keyup", function (event) {
//   console.log(event.key);
//   console.log("Key released");
// });

inp.addEventListener("keydown", function (event) {
  console.log("Code: ", event.code);
});
if (event.code == "ArrowUp") {
  console.log("Characters Moving Up");
} else if (event.code == "ArrowDown") {
  console.log("Characters Moving Down");
} else if (event.code == "ArrowLeft") {
  console.log("Characters Moving Left");
} else if (event.code == "ArrowRight") {
  console.log("Characters Moving Right");
}
