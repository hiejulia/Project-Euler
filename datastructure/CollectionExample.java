import java.util.*;

public class CollectionExample {

   public static void main(String args[]) {
      
      LinkedList ll = new LinkedList();
      ll.add(new Integer(-8));
      ll.add(new Integer(20));
      ll.add(new Integer(-20));
      ll.add(new Integer(8));
      
      
      Comparator r = Collections.reverseOrder();
      
      Collections.sort(ll, r);
      
      Iterator li = ll.iterator();
      System.out.print("List duoc sap xep theo thu tu dao nguoc la: ");
      while(li.hasNext()){
         System.out.print(li.next() + " ");
      }
      System.out.println();
      Collections.shuffle(ll);
      // Random 
      li = ll.iterator();
      System.out.print("List sau khi bi xao tron la: ");
      while(li.hasNext()){
         System.out.print(li.next() + " ");
      }
      System.out.println();
      System.out.println("Minimum: " + Collections.min(ll));
      System.out.println("Maximum: " + Collections.max(ll));
   }
}