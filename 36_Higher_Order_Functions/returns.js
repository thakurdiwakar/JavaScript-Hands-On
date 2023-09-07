function EvenOdd(temp) {
  if (temp == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
    return even;
  }

  if (temp == "odd") {
    return function (n) {
      console.log(n % 2 !== 0);
    };
    return odd;
  } else {
    console.log("Wrong Input");
  }
}
let temp = "odd";
let check = EvenOdd(temp);
check(5);
