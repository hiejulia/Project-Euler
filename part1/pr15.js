
(function(){
'use strict';
/**
 * grid size = 20 
 * dynamic programming
 * combinatorics
 * 
 */
var gridSize = 20;//init grid size 
/**
 * algorithm solved : Set R(right) and D(down)
 * with 2x2 => 
 * →→↓↓  →↓→↓    →↓↓→      ↓→→↓      ↓→↓→     ↓↓→→ 
 * means : combinatorics is (2x2)! but substract the repetitive occasions : (2x2)! / 2! x 2!  = 6 occasions
 * So, with 20x20 => set gridSize = 20
 * we have the algorithm : result = (2x20)! / 20!x20!
 */ 
var result = 1;
result = (factorial((2*gridSize)) /(factorial(gridSize) * factorial(gridSize)) );
console.log(result);

//factorial function 
var fn = [];
function factorial(n){
    if(n == 0 || n==1){
        return 1;
    }
    if(fn[n] > 0 ){
        return fn[n];
    }
    return fn[n] = factorial(n-1) * n;
}




})();