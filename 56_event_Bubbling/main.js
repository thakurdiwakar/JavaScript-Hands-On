let div = document.querySelector("div");
let ul = document.querySelector("ul");
let liElements = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Clicked the div");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Clicked the ul");
});

liElements.forEach(function (li) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Clicked an li");
  });
});
