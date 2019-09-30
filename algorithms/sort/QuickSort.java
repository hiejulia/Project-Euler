import java.util.Arrays;

class QuickSort {
	public static void main(String [] args) {
        
        final int[] originalData = new int[] { 49, 38, 65, 97, 76, 13, 27, 78, 34, 12, 64, 5, 4, 62, 99, 98, 54, 56, 17,
                18, 23, 34, 15, 35, 25, 53, 51 };
        

        int[] result = _quickSort(originalData, 0, originalData.length - 1);
        
        System.out.println(result);
    }
    

   
    private static int getPivot(int[] array, int low, int high) {  
        int tmp = array[low];    
        while (low < high) {  
            while (low < high && array[high] >= tmp) {  
                high--;  
            }  
            array[low] = array[high];   
            while (low < high && array[low] <= tmp) {  
                low++;  
            }  
            array[high] = array[low];   
        }  
        array[low] = tmp;              
        return low;                  
    } 


    private static int[] _quickSort(int[] array, int low, int high) {  
        if (low < high) {  
            // Get pivot 
            int pivot = getPivot(array, low, high);  
            // Recursion 
            _quickSort(array, low, pivot - 1);      
            _quickSort(array, pivot + 1, high);      
        }  
        return array;
    }  
    
   
}