/**
* Requirements: "1. Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)/
* 5 Print Relevel if divisible by 3/
* 5 Print Buzz if divisible by 5/
* 5 Print 6indBuzz if divisible by 15/
* 5 Print the number if all the above condition fails0"
*/
 
 
for (let i = 1; i < 101; i++) {
    if(i % 15 === 0){
        console.log('6indBuzz');
    }
    else if(i % 3 === 0){
        console.log('Relevel');
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else console.log(i);
}
