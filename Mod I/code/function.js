console.log(a);
let a = () => { return("new function with "+b); };
let b = 'b';
console.log(String(a()).split("").reverse().join(""));