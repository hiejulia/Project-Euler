'use strict';
function test(n){
    //isPrime
    function isPrime(n){
        var i, checkHere = Math.ceil(Math.sqrt(n));//find 
        for(i=3;i<=checkHere;i+=2){
            if(n%i ===0){
                //isPrime check
                return false;
            }
        }
        //else
        return true;
    }




}
//call the function
console.log(test(20));