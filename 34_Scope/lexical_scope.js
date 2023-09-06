function outerFunction() {
  let str = "Diwakar";

  function innerFunction() {
    console.log(str);
  }
  innerFunction();
}

outerFunction();
