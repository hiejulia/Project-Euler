'use strict';

function biggest(n) {
  var max = 2;
  var numbers = [];
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      numbers.push(i);

    }

  }
  console.log(numbers);

  for (var k = 0; k < numbers.length; k++) {
    if (numbers[k] > max) {
      console.log(numbers[k]);
      max = numbers[k];
    }
  }


}

//call the function
console.log(biggest(600851475143));
//better solution for : loop from 3 -> Math.sqrt(number)