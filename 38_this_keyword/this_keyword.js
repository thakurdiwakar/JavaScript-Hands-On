let result = {
  a: 30,
  b: 54,
  c: 45,
  getSum() {
    let sum = this.a + this.b + this.c;

    console.log(sum);
  },
};

result.getSum();
console.log(this); // In a browser, this refers to the window object


function getDemo()
{
    console.log(this);
}

getDemo();