'use strict';
var bigint = require('bigint');
var bigInt = require("big-integer");

// var closedFibonacci = (function() {
//   var sqrtFive = Math.sqrt(5);

//   var posPhi = (1 + sqrtFive)/2;
//   var negPhi = (1 - sqrtFive)/2;

//   var numbers = {};
  
//   return function(n) {
//     if (numbers[n] === undefined || numbers[n] === null) {

//       var coefficent = 1/sqrtFive;
//       var firstTerm = Math.pow(posPhi, n);
//       var secondTerm = Math.pow(negPhi, n);

//       var number = Math.round(coefficent * (firstTerm - secondTerm));
      
//       numbers[n] = number;
//     }
//     return numbers[n];
//   };

// })();


//F(n) = F(n-1) + F(n-2)
//simple solution 
// function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }





//recursion solution
function fibonacciRecursion(n){
    if(n<1) return 1;
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
}

function fib(n) {
  return function(n, a, b) {
    return n>0 ? arguments.callee(n-1,b,a.add(b)) : a;
  }(n, bigint(0), bigint(1));
}

module.exports = fib;