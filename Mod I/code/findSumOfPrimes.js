// //Given x finx a, b such that x = a + b where x >= 2 and a, b are prime

function isPrime(N){
    for(let i = 2; i <= Math.sqrt(N); i++){
        if(N%i == 0){
            return false;
        }
    }
    return true;
}


const x = 10000;
let half = Math.ceil(x/2);
for(let i=2; i <= half; i++){
    if(isPrime(i) && isPrime(x - i)){
        console.log([i, x-i]);
    }
}