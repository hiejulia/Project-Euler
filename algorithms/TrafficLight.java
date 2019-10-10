import java.util.*;

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

}
