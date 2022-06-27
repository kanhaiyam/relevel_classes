let n = parseInt(readline());

function letsFizzBuzz(n){
	for(let i = 1; i <= n; i++){
		if((i % 3 === 0) && (i % 5 === 0)){
		    output = "FizzBuzz";
	    }else if((i % 3 === 0)){
		    output = "Fizz";
	    }else if((i % 5 === 0)){
		    output = "Buzz"; 
	    }else output = i;
        console.log(output);
	}
}

letsFizzBuzz(n)