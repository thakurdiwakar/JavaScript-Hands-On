function sumOfNumbers(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

let result = sumOfNumbers(4);
console.log(result);
