'use strict';
/**
 * user BRUTE FORCE SOLUTION 
 * 
 */
//set const
var MONEY = 200;
var COUNT = 0;
//loop

for(var a= MONEY;a>=0;a-=200){
    for(var b= a;b>=0;b-=100){
        for(var c = b;c>=0;c-=50){
            for(var d = c;d>=0;d-=20){
                for (var e = d; e >= 0; e -= 10) {
                    for (var f = e; f >= 0; f -= 5) {
                        for (var g = f; g >= 0; g -= 2) {
                            COUNT++;
                            console.log('Result is '+COUNT);
                        }
                    }
                }
            }
        }
    }
}

/**
 * DYNAMIC PROGRAMMING SOLUTION
 */

var coinSize = [1,2,5,10,20,50,100,200];
var  ways =new Array(MONEY+1);
ways[0] =1;

for (var i = 0; i < coinSize.Length; i++) {
    for (var j = coinSizes[i]; j <= MONEY; j++) {
        ways[j] += ways[j - coinSizes[i]];
    }
}


/**
 * RECURSION SOLUTION 
 */