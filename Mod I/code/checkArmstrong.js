const N = 370;
checkArmStrong(N);

function checkArmStrong(N){
    sum = 0;
    temp = N;
    while(N !== 0){
        digit = Math.pow((N % 10), 3);
        sum = sum + digit;
        N = parseInt(N / 10);
    }
    console.log(sum === temp);
}

