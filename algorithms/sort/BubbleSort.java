import java.util.Arrays;

class BubbleSort {
	public static void main(String [] args) {
        
        final int[] originalData = new int[] { 49, 38, 65, 97, 76, 13, 27, 78, 34, 12, 64, 5, 4, 62, 99, 98, 54, 56, 17,
                18, 23, 34, 15, 35, 25, 53, 51 };
        

		System.out.println (bubbleSort(originalData));  
    }
    

    // Bubble sort function 
    private static int []  bubbleSort ( int [] array) {    
        int  temp =  0 ;  
        for  ( int  i =  0 ; i <array.length -  1 ; i ++) {  
            for  ( int  j =  0 ; j <array.length -  1  - i; j ++) {  
                if  (array [j]> array [j +  1 ]) {  
                    // swap 
                    temp = array [j];  
                    array [j] = array [j +  1 ];  
                    array [j +  1 ] = temp;  
                }  
            }  
        }
        return array;  
    } 
}