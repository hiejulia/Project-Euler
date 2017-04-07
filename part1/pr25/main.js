'use strict';

var bigint = require('bigint');
var bigInt = require("big-integer");
var fibonacci = require('./fibonacci');

//count the number of digits of a number without casting to string 
function countDigits(number){
    return (number === 0) ? 1 : log10(number) + 1;

}

//way of a math log 
function log10(val) {
  return Math.log(val) / Math.LN10;
}

function countFinal(n) {
    //number of digits of n 
  return n.toString().split('').length;
}

/**APP MAIN FUNCTION ENTRY  */
function app(digits) {
  var result  = 1;
  //calculate  fibonacci
  var nextFib = fibonacci(index);
  //number of digits of the fibonacci number 
  var numDigits = alternateCountDigits(nextFib);

  while (numDigits < digits) {
    result++;
    nextFib = fibonacci(index);
    numDigits = countFinal(nextFib);
  }

  return result;
}

// module.exports = {
//   countDigits: alternateCountDigits,
//   log10: log10,
//   fibDigitCount: app
// };

console.log(app(1000));