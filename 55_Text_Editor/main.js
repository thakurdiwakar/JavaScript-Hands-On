let inp = document.querySelector("#text");

let p1 = document.querySelector("p");

inp.addEventListener("input", function (event) {
  // console.log(inp.value);

  p1.innerText = this.value;
});
