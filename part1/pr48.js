/**
 * 1^1 + 2^2 + 3^3 +....+ 1000^1000
 */

function test(){
    var result=[];
    
    var sum =0;
    for(var i=1;i<=1000;i++){
        sum += Math.pow(i,i);
    }
    console.log(sum);
    //sum
    sum = sum.toString().split("");
    for(var i=sum.length-1;i>=sum.length-11;i--) {
        result.push(i);
        console.log(result);
        result.join("");
        //result = ""
        result = parseInt(result);

        console.log(result);
        


    }
}

test();

//to be continue... 