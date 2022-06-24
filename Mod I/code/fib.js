const N = 10;
console.log(findNthFib(N));
function findNthFib(N){
    let a = 1;
    let b = 1;
    let fib = a + b;
    
    if(N == 0){
        return (0);
    }
    if(N == 1){
        return (1);
    }
    for(let i = 2; i < N-1;i++){
        fib = a + b;
        a = b;
        b = fib;
    }
    return (fib)
}


