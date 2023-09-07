const operations = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  }
};

console.log(operations.add(2, 3));
console.log(operations.sub(2, 3));
console.log(operations.mul(2, 3));
console.log(operations.div(6, 3));
