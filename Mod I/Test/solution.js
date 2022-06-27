function calculator(a, b, sign){
    let result;
    switch(sign){
        case '+':
            result = (a + b);
            break;
        
        case '-':
            result = (a - b);
            break;
        
        case '*':
            result = (a * b);
            break;
        
        case '/':
            result = (a / b);
            break;
        
        default:
            return;
    }
    temp = parseFloat(result).toFixed(2);
    if(temp == result+'.00'){
        return result;
    }
    return temp;
}

console.log(calculator(4, 5, "+")); // 9
console.log(calculator(3867, 9347, "+")); // 13214
console.log(calculator(9, 3, "/")); // 3
console.log(calculator(3, 9, "/")); // 0.33 
console.log(calculator(56, 89, "*")); // 4984
console.log(calculator(-5, 5, "-")); // -10
console.log(calculator(56, 89, "-")); // -33