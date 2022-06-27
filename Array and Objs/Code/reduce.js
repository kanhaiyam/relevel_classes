var input = [1, 2, 3];
var sum = input.reduce((acc, curr) => {acc = acc + curr; console.log(acc, curr)});
console.log(sum); // console: 11