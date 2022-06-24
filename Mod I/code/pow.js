function xpowy(x ,y){
    let ans = 1;
    for(let i=0; i < y; i++){
        ans *= x;
    }
    return x;
}
console.log(xpowy(4,-3), Math.pow(4, -3));