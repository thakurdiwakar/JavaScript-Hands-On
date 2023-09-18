let jsonData =
  '{"fact":"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.","length":103}';

let data = JSON.parse(jsonData);

console.log(data);
console.log(typeof data);

console.log(typeof jsonData);


let string=JSON.stringify(data);

console.log(string);