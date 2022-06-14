// Given a positive integer A, find a pair of integers a, b such that
// a and b are positive
// A <= B
// a^2 + b^2 = A
// 0<=A<=100000

printPair(50505050);

function printPair(num) {
    let a = 0;
    while ((a * a) < num) {
        let b = 0;
        while ((b * b) < num) {
            if (a <= b) {
                if ((a * a) + (b * b) == num) {
                    console.log(a + "," + b);
                }
            }
            b++;
        }
        a++;
    }
}

