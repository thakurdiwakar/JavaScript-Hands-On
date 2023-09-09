//find maximum in an array using reduce method

let nums = [11, 2, 3, 4, 5, 6];

let maximum = nums.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});

console.log(maximum);
