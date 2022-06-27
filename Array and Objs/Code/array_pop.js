function arrayPop(arrr){
    let arr = arrr;
    l = Math.max((arr.length -1), 0);
    v = arr[l];
    arr.length = l;
    return v;
}

a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);

x = a.pop();

console.log(a);
console.log(x);


x = arrayPop(a);
console.log(a);
console.log(x);

//Does JS always pass by reference and the copy is also a reference.
// WTF?