let sum = 6; //global scope
function add() {
  let sum = 0; //function scope

  console.log(sum);
}

add();
