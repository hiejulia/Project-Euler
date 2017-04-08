'use strict';

/**
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
 */


//get the list of primes number from eratosthenes from pr10

//check if the number contain number even 0,2,4,6,8 or 5 => if yes, false => go back 1 =>
//move the number to the temporary list 

//rotate the number and check if prime  => if not => back 1=> if yes, move to a temporary list
//return the length of the temporary list 
var limit = 1000000;
function primesList(limit){
    //return list of prime 
    var primes = [];
    for(var i = 1;i <= limit;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}


function isPrime (n)
{
    if (n < 2) return false;

    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **/

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

function checkCircularPrime(prime){
    var primes = [];
    primes = primesList();//return list array of prime number <1 mil

    var count = 0;
    var multiplier = 1;
    var number = prime;//set the number = prime in the list 
    var d;
    ///check for even numbers or 5 if each digit 
    while(number >0){
        d = number % 10;
        if(d ===5 || d %2 === 0){
            // array.indexOf(5);
            // array.splice(index, 1);
            if(primes.indexOf(prime) > -1){
                primes.splice(primes.indexOf(prime),1);//delete from the primes list 
                return 0;
            }
           
        }
        number /=10;
        multiplier *= 10;
        count++;

    }//end while 


    multiplier /= 10;

    //Rotate the number and check if they are prime
    number = prime;
    var foundCircularPrimes=[];//set the temporary list 
    

     for (var i = 0; i < count; i++) {
        if(primes.indexOf(number) > -1) {//has
            foundCircularPrimes.push(number);
           //delete from the primes array
            primes.splice(primes.indexOf(number),1);
        }else if(!primes.indexOf(number) > -1) {
            return 0;//return 0 
        }
 
        d = number % 10;
        number = d * multiplier + number / 10;
    }
    console.log(foundCircularPrimes.length);
 return foundCircularPrimes.length;

}



// int noCircularPrimes = 2;
// primes = new SortedSet<int>(ESieve(1000000));
// //Special cases
// primes.Remove(2);
// primes.Remove(5);
 
// while (primes.Count > 0) {
//     noCircularPrimes += CheckCircularPrimes(primes.Min);