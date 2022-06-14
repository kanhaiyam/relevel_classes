// Create a program to print all the palindromes under 50.

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listPalindromes(max = 50) {
    for(let i = 0; i <= max; i++){
        rev = reverseString(String(i));
        if(rev == i){
            console.log(i + " is a palindrome");
        }
    }
}

listPalindromes();

// listPalindromes(100);