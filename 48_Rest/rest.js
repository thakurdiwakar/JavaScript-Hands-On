function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(11, 12, 3, 40, 5, 34, 55, 1, 22, 3));
