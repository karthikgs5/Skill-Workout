

//check if a given number is prime.


function prime (number) {
    if(number<=1){
        return false
    }
    for(let i =2 ; i<=number/2 ; i++) {
  
        if(number % i === 0) {
            return "not prime number"
        }
    }
    return "Prime Number"
}

console.log(prime(157));