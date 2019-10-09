import java.util.*;

class ArrayLinkedList {
    public static void main(String [] args) {

        ArrayList arrayList = new ArrayList();
        LinkedList linkedList = new LinkedList();

        // ArrayList add
        long startTime = System.nanoTime();

        for (int i = 0; i < 100000; i++) {
        arrayList.add(i);
        }
        long endTime = System.nanoTime();
        long duration = endTime - startTime;
        System.out.println("ArrayList add:  " + duration);

        // LinkedList add
        startTime = System.nanoTime();

        for (int i = 0; i < 100000; i++) {
        linkedList.add(i);
        }
        endTime = System.nanoTime();
        duration = endTime - startTime;
        System.out.println("LinkedList add: " + duration);

        // ArrayList get
        startTime = System.nanoTime();

        for (int i = 0; i < 10000; i++) {
        arrayList.get(i);
        }
        endTime = System.nanoTime();
        duration = endTime - startTime;
        System.out.println("ArrayList get:  " + duration);

        // LinkedList get
        startTime = System.nanoTime();

        for (int i = 0; i < 10000; i++) {
        linkedList.get(i);
        }
        endTime = System.nanoTime();
        duration = endTime - startTime;
        System.out.println("LinkedList get: " + duration);


        // ArrayList remove
        startTime = System.nanoTime();

        for (int i = 9999; i >=0; i--) {
        arrayList.remove(i);
        }
        endTime = System.nanoTime();
        duration = endTime - startTime;
        System.out.println("ArrayList remove:  " + duration);

        // LinkedList remove
        startTime = System.nanoTime();

        for (int i = 9999; i >=0; i--) {
        linkedList.remove(i);
        }
        endTime = System.nanoTime();
        duration = endTime - startTime;
        System.out.println("LinkedList remove: " + duration);




        // ArrayList 
        String[] test1 = {"a","b"};
        String[] test2 = {"c","d"};

        List<String> list1 = new LinkedList<>();
        List<String> list2 = new LinkedList<>();


        // Add test1,test2 to list1,list2
        for(int count = 0; count < test1.length; count++){
            list1.add(test1[count]);
        }

        list2.addAll(list1);

        // Transform list 2 to UPper case letter 
        ListIterator<String> listIterator = list2.listIterator();




        // Tranverse list = ListIterator 



        // Delete value from n - > m index in list 	
    }

}