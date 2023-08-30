let nested = [
  [1, 2],
  [34, 23, 21, 11, 3],
  [1, 2, 3, 4],
];

for (let i = 0; i < nested.length; i++) {


  for (let j = 0; j < nested[i].length; j++) {
    console.log(i,nested[i][j]);
  }
}
