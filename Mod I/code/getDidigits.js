const N = 12344;
getDigits(N);


function getDigits(N){
    while(N !== 0){
        console.log(N % 10);
        N = parseInt(N / 10);
    }
}