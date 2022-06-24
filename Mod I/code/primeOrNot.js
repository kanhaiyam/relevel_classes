function isPrime(N){
    for(let i = 2; i <= Math.sqrt(N); i++){
        if(N%i == 0){
            return false;
        }
    }
    return true;
}

const N = 1200000;

for(let i = 1; i <= N; i++){
    if(isPrime(i)){
        console.log(i);
    }
}