let str = ["Diwakar", "singh", "how", "are", "you"];

function concatString(str) {
  let ans=" ";
  for (let i = 0; i < str.length; i++) {
    ans = ans + str[i];
  }
  return ans;
}

console.log(concatString(str));
