let arr1 = [];
let arr2 = [];

console.log(arr1 == arr2);

let arr = [1, 2, 3];
let arrCopy = arr;

console.log(arr == arrCopy);
console.log(arr === arrCopy);

arrCopy.push(33);

console.log(arr);
console.log(arrCopy);
