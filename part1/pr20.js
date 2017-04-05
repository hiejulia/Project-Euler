(function(){
'use strict';
var number = 100;
var fn = [];
//factorial function 
function factorial(n){
    if(n == 0 || n==1){
        return 1;
    }
    if(fn[n] > 0 ){
        return fn[n];
    }
    return fn[n] = factorial(n-1) * n;
}



function factorialSum(){

}

})()