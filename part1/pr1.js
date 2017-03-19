/**
 * <10
 * 3,5 
 * sum
 * 1000
 */
'use strict';
function pro1(number) {
    var sum = 0;
    for (var i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;

        }
    }
    return sum;
}
//call the function
pro1(1000);