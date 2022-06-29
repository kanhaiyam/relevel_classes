// let numArr = [10, 20, 40, 0, -1, 89, 99, 10000];
// let numArr = [10, 20, 40];
// let numArr = [10, 20];
// let numArr = [10];
// let numArr = [];
// let numArr = [Infinity];
let numArr = [null, 1];

function minMax(arr){
    if(arr[0] > arr[1]){
        min = arr[1];
        max = arr[0];
    }else{
        min = arr[0];
        max = arr[1];
    }
    for(let i = 2; i <= arr.length - 1; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {"min" : min, "max": max};
}

console.table(minMax(numArr));