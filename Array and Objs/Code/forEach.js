let a = [1, 1, 2, 3, 5, 8, 13, 21];

//so the callback can accept three values in the order of element (value),index (key) and array. 


a.forEach(element => {
    console.log(element)
});

a.forEach((ele, i, arr)  => {
    console.log(ele, i, arr);
});

// a.forEach(function(elem, i, arr){
//     console.log(elem, i, arr);
// });


let b = [0, 1, 1, 2, 3];
b[100] = 1;
b.forEach(function(ele, i, arr){
    console.log(ele, i);
});

//forEach doesn't work on Objects

let c = {
    name : "kanhaiya",
    address : "gurgaon"
}

c.forEach(element => {
    console.log(element);
});