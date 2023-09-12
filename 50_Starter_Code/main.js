let para1 = document.createElement("p");

para1.innerText = "hey I'm red";

document.querySelector("body").append(para1);

para1.classList.add("red");

let head1 = document.createElement("h3");

head1.innerText = "I'm a blue h3!";

document.querySelector("body").append(head1);

head1.classList.add("blue");

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
let p1 = document.createElement("p");


h1.innerText = "I am in div";
p1.innerText = "Me too";

div1.append(h1);
div1.append(p1);

document.querySelector("body").append(div1);
div1.classList.add("div");


