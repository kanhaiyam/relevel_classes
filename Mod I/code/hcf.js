// WAP to find the HCF or GCD of two integers

let hcf;
const n1 = 60;
const n2 = 72;

for (let i = 1; i <= n1 && i <= n2; i++) {
    if( n1 % i == 0 && n2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${n1} and ${n2} is ${hcf}.`);