let a = [];
let b = {};

console.log(typeof a);
console.log(typeof b);

a = [1,2,3,4];
b = {name:"kanhaiya"};

console.log(typeof a);
console.log(typeof b);

a.push(10);
console.log(a);

a.pop();
console.log(a);

a.unshift(10);
console.log(a);

a[10] = 1;
console.log(a);
console.log(a.length);

a[-1] = null;

console.table(a);
console.log(a.length);

console.log(a[18]);
console.log(b.name);
console.log(b.address);