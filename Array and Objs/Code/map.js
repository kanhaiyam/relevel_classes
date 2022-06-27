let a = [1, 2, 3, 4, 5];

console.log(a);

let forEachValues = a.forEach(function(ele, i) {
    return `${ele} is value at ${i}`;
});

let mapValues = a.map(function(ele, i) {
    return `${ele} is value at ${i}`;
});

console.log(a, forEachValues, mapValues);
