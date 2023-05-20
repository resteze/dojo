import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        Items item1 = new Items();
        item1.name = "capuccino";
        item1.price = 4;

        Items item2 = new Items();
        item2.name = "drip coffee";
        item2.price = 2;

        Items item3 = new Items();
        item3.name = "mocha";
        item3.price = 2.5;

        Items item4 = new Items();
        item4.name = "latte";
        item4.price = 3;
        // Order variables -- order1, order2 etc.
        Orders order1 = new Orders();
        order1.name = "Cindhuri";
        order1.total = 0;
        order1.ready = false;
        order1.total = 0;
        order1.items = new ArrayList<Items>();
        
        Orders order2 = new Orders();
        order2.name = "Jimmy";
        order2.total = 0;
        order2.ready = false;
        order2.items = new ArrayList<Items>();

        Orders order3 = new Orders();
        order3.name = "Noah";
        order3.total = 0;
        order3.ready = false;
        order3.items = new ArrayList<Items>();
        
        Orders order4 = new Orders();
        order4.name = "Sam";
        order4.total = 0;
        order4.ready = false;
        order4.items = new ArrayList<Items>();
        // Application Simulations
        
        System.out.print(getClass(Items));
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
        System.out.printf("Items:%s\n", order2.items);
    }
}
