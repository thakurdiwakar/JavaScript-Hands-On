{
  let a = 6;

  console.log(a);
}
// console.log(a); //not work

{
  var b = 8;
}
console.log(b);

for (let i = 0; i < 3; i++) {
  console.log(i);   //block scope
}

console.log(i);
