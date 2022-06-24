function factorial(n) {
    if (n>=1)
        return n*factorial(n-1);
    else
        return 1;
}

function fact(n){
    let fact = 1;
    if(n == 0){
        return 1;
    }
    for(let i = 1; i<=n; i++){
        fact *= i;
    }
    return fact;
}

console.log(fact(50));