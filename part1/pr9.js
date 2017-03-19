'use strict';
function test(){

    var a,b,c;
    a=3;b=a+1;
    //check from here
    while(a<1000){
        while(b<1000 && a<b){
            c= 1000-(a+b);
            if(c<b){
                break;//c always >a,b
            }
            if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
                console.log(a *b*c);
                return a*b*c;
            }
            b++;
        }
        a++;
        b=a+1;
    }
}

//call the function 
console.log(test());