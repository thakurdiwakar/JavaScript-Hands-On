function multipleHello(func, length) {
  for (let i = 0; i < length; i++) {
    func();
  }
}
let hello = function () {
  console.log("Hello");
};

multipleHello(hello, 3);

console.log("Here is another higher order function ");
function multipleHello1(func1, length) {
  for (let i = 0; i < length; i++) {
    func1();
  }
}

function hello1() {
  console.log("Hello1");
}

multipleHello1(hello1, 3);
