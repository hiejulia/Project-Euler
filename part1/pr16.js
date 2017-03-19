/*
2^15 = 32768 ---> 3+2+7+6+8 = 26
*/

function test(){
    var n = Math.pow(2,1000);
    console.log(n);
    n=n.toString().split("");
    var sum =0;
    for(var i in n){
        sum+= parseInt(n[i]);
    }

}

//call the function
test();