const N = 12344;
sumDigits(N);


function sumDigits(N){
    sum = 0;
    while(N !== 0){
        sum = sum + (N % 10);
        N = parseInt(N / 10);
    }
    console.log(sum);
}