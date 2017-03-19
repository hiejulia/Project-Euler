/*
fibonacci
even-value
*/ 


'use strict';
function sum(number) {
    var temp, sum = 0, a = 0, b = 1;
    while (b < limit) {
        temp = a;
        a = b;
        b += temp;
        if ((b % 2) === 0) {
            sum += b;
        }
    }
    return sum;
}
//call the function 
console.log(sum(4e6));