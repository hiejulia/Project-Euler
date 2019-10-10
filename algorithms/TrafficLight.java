import java.util.*;

class TrafficLight {

    // Design traffic light 





    public static void main(String [] args) {

 
    }


    // Linear Search 





    // Binary Search 





    // Interpolation Search 




    //

    public static int smallestAvg(int[] A){

        int smallestStart =0;

        double smallestAvgValue = Double.MAX_VALUE;

        for(int i = 0; i< A.length -1; i++){
            if( ((A[i] + A[i+1])/(double)2) < smallestAvgValue){
                smallestAvgValue = ((A[i] + A[i+1])/(double)2);
                smallestStart = i;
            }
            //System.out.println(smallestAvg + " vs " + ((A[i] + A[i+1])/2) + " " + smallestStart);
            if((i+2)<A.length && ((A[i] + A[i+1] + A[i+2])/(double)3) < smallestAvgValue){
                smallestAvgValue = ((A[i] + A[i+1] + A[i+2])/(double)3);
                smallestStart = i;
            }i
        }



        return smallestStart;
    }



    


}




