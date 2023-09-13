let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  alert("Form Submitted");

  event.preventDefault();

  let input = document.querySelector("input");

  // console.log(input);

  console.log(input.value);
  // console.log(input.innerText);
});
