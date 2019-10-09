import java.util.Arrays;

class Example {
    public static void main(String [] args) {

       // Insert
       int[] my_array = {25, 14, 56, 15, 36, 56, 77, 18, 29, 49};

       int[] my_array_result = insertNumberToPosition(my_array,4,111);
 
    }

    public static int[] insertNumberToPosition(int[] arr,int k,int n){
        arr[k] = n;
        for(int i=arr.length-1; i > k; i--){
            arr[i] = arr[i-1];
           }
        return arr;
    }

    // Delete prime number 

    public static int[] deletePrimeNumber(int[] arr){
        int[] result = new int[arr.length];
        int count = 0;
        for (int i : arr) { 
            if(isPrime(i)){
                result[count] = i;
                count++;
            }
        } 
        return arr;
    }

    // Optimized 
    static boolean isPrime(int n) 
    { 
        if (n <= 1) 
            return false; 
        if (n <= 3) 
            return true; 
        if (n % 2 == 0 || n % 3 == 0) 
            return false; 
        for (int i = 5; i * i <= n; i = i + 6) 
            if (n % i == 0 || n % (i + 2) == 0) 
                return false; 
  
        return true; 
    } 

}