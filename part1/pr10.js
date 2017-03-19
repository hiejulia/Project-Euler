/**
 * the sum of primes 2+3+5+7 = 17
 */

'use strict';

function test(n) {
  var sum = 0;
  
  var i = n;
  // while primes is less than the sought after number
  while (i >= 2) {
    if (isPrime(i) === true) {
      sum += i;
    }

    i--;
  }
  //check primes
  function isPrime(n) {
    var x = Math.floor(Math.sqrt(n));
    var j = x;

    while (j >= 2) {
      if (n % j === 0) {
        return false;
      }
      j--;
    }

    return true;
  }

  console.log(sum);
  return sum;

}

//call the function
console.log(test(2e+6));

