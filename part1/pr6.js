function test(n) {
  //loop
  //find the sum of 1 and 2
  var n1 = 0;
  var n2 = 0;
  var temp = 0;
  for (var i = 1; i <= n; i++) {
    n1 += i * i; //n1 value
    //n2
    temp += i;

  }
  //n1
  //console.log(n1);
  //n2
  n2 = temp * temp;
  //console.log(n2);

  //find the difference
  return (Math.abs(n2 - n1));

}



//call the function 
console.log(test(100));
