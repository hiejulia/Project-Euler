/**
 * 
 * 2 3 5 7 11 13 
 * 1 2 3 4 5  6
 * 6th = 13
 * 10001st 
 * 
 * 
 */

function test(n){
    //isPrime
    var i = [2,3];
    var primes = [2,3];
    var n =5;
//isPrime

    function isPrime(n) {
        var i = 1, p = primes[i],
            checkHere = Math.ceil(Math.sqrt(n));
        while (p <= checkHere) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }
     for (i = 2; i <= index; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    }
    return primes[index - 1];
}

//call the function
console.log(test(10001));