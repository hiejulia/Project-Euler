import java.util.*;

import com.sun.jmx.mbeanserver.MXBeanSupport;

class TrafficLight {

    // Design traffic light

    public static void main(String[] args) {

    }

    // Linear Search

    // Binary Search

    // Interpolation Search

    // Smallest avg in an array partition

    public static int smallestAvg(int[] A) {

        int smallestStart = 0;

        double smallestAvgValue = Double.MAX_VALUE;

        for (int i = 0; i < A.length - 1; i++) {
            if (((A[i] + A[i + 1]) / (double) 2) < smallestAvgValue) {
                smallestAvgValue = ((A[i] + A[i + 1]) / (double) 2);
                smallestStart = i;
            }
            // System.out.println(smallestAvg + " vs " + ((A[i] + A[i+1])/2) + " " +
            // smallestStart);
            if ((i + 2) < A.length && ((A[i] + A[i + 1] + A[i + 2]) / (double) 3) < smallestAvgValue) {
                smallestAvgValue = ((A[i] + A[i + 1] + A[i + 2]) / (double) 3);
                smallestStart = i;
            }
        }

        return smallestStart;
    }

    // Lesson 3: Time complexity
    // FrogJump - count the minimal number of jumps from X - Y

    public static int frogJump(int X, int Y, int D)){

        int minJump  = 0;

        if (X >= Y) return 0;

        if (D == 0) return -1;

        if(Y-X % D == 0){
            minJump = (Y - X) / D;
        } else {
            minJump= (Y - X) / D +1;
        }
        return minJump;

    }

    /**
     * Lesson 5 - Prefix sums
     */

    // Passing cars

    // End passing cars

    int getPassingCars(int A[], int n) {
        int result = 0;
        for (int i = 0; i < n - 1; i++) {
            if (A[i] == 0) {
                for (int j = i + 1; j < n; j++)
                    if (A[j])
                        result++;
            }
        }
        return result;
    }



    /**
     * Lesson 7 : Stacks and Queues
     */

     // Nesting 
     public int solution(String S){


         // Special case 
         if (S.isEmpty()) return 1;
         if (S.length() % 2 == 1) return 0; 
         // End special case 


         Map<Character, Character> map = new HashMap<Character, Character>();
        map.put('}', '{');
        map.put(')', '(');
        map.put(']', '[');

        Stack<Character> stack = new Stack<Character>();

        for(Character c : S.toCharArray()){
            if(map.containsKey(c)){
                if(!stack.isEmpty() && map.get(c) == stack.peek()){
                    stack.pop();
                }else {
                    return 0;
                }             

            } else {
                stack.push(c);
            }

        }        
         return stack.isEmpty() ? 1:0;
     }


     // Lesson 6 - Sorting - MaxProductOfThree 

     public int maxProductOfThree(int[] A){
         if(A.length <3){
            return 0;
         }

         if(A.length == 3) return A[0]*A[1]*A[2];

         // Sort array 
         Arrays.sort(A);

         if(A[0] < 0 && A[A.length - 1] > 0){
            if(A[A.length - 3] > 0){
                return A[A.length-1]*A[A.length-2]*A[A.length-3];
            } 
            if(A[A.length - 2] > 0 && A[A.length - 3] < 0){
                return A[0]*A[1]*A[2];
            }
            if(A[A.length - 2] < 0 && A[A.length -1 ] > 0){
                return A[A.length-1]*A[A.length-2]*A[A.length-3];
            }
         }

        if(A[0] < 0 && A[A.length - 1] < 0){
            return A[0]*A[1]*A[2];
        }

        if(A[0] > 0 && A[A.length - 1] > 0){
            return A[A.length-1]*A[A.length-2]*A[A.length-3];
        }
     } 

     /**
      * Lesson 8 - Dominator 
      */

      public int leaderFunction(int[] A){
          int result = 0;

          if(A.length ==0) return 0;
        

          Map<Integer, Integer> map = new HashMap<>();


          for(int i = 0;i<A.length/2;i++){
            if(A[i] == map.get(A[i])){
                count++;
                map.put(A[i],count);
            } else{
                count = 0;
                map.put(A[i],count);
            }
          }

          // Check if there is any key- value with value >= length/2 
          return result;
      }

      // Naive recursive method 



      public int MaxProfit(int[] A){
          // Length == 0 || Length == 1 return 0 
          if(A.length == 1 || A.length == 0){
            return 0;
            }

            int maxSoFar = 0;
            int maxEndingHere = 0;
            int minPrice  = A[0];

            for(int i = 1; i<A.length;i++){
                maxEndingHere = Math.max(0,A[i]-minPrice);
                minPrice = Math.min(minPrice,A[i]);
                max = Math.max(maxEndingHere-max);
            }
            return maxSoFar;
      }

      // Factor

      public int factorFunction(int N){
          int count = 0;

          for (int i=1; i<=(double)Math.sqrt(N); i++) {
            if(i==(double)Math.sqrt(N)) {
                count++;
            }else if(N % i == 0) {
                result = result + 2;
            }   
        }

          return count;

      }






      



     



}



