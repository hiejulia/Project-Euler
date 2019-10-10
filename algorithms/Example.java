import java.util.*;

class Example {
    public static void main(String [] args) {

       // Insert
       int[] my_array = {25, 14, 56, 15, 36, 56, 77, 18, 29, 49};

       int[] my_array_result = insertNumberToPosition(my_array,4,111);
 
    }

    // Find fibonacci n 

    public static int findFibonacciN(int n){
        int[] f = new int[n+1];
        f[0]= f[1] = 1;
        for(int i=2;i<n+ 1;i++){
            f[i]= f[i-1]+f[i-2];
        }
        return f[n];
    }

    // Integer -> primary factor 
    public static List<Integer> primeFactors(int n){
        List<Integer> factors = new ArrayList<Integer>();
        for(int i = 2;i<= n/i;i++){
            if(n % i == 0){
                factors.add(i);
                n /= i;
            }
        }
        return factors;
    }


    /**
     * CODILITY EXERCISE 
     */

     // Binary search tree 





     // Dynamic programming

        // 1. K[] - and f[] = {} : search times 
        // Find binary tree - with K - sum of f is min 


        

    
    // Find missing number in array

    



}




