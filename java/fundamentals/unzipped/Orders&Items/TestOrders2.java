public class TestOrders2 {
    public static void main(String[] args) {

        // Menu items
        Items item1 = new Items("capuccino", 4);

        Items item2 = new Items("drip coffee", 2);

        Items item3 = new Items("mocha", 2.5);

        Items item4 = new Items("latte", 3);
        //Orders
        Orders order1 = new Orders();
        
        Orders order2 = new Orders();

        Orders order3 = new Orders("David");

        Orders order4 = new Orders("John");

        Orders order5 = new Orders("Jake");

        //actions
        order1.addItem(item1);
        order1.addItem(item3);

        order2.addItem(item2);
        order2.addItem(item3);

        order3.addItem(item3);
        order3.addItem(item4);

        order4.addItem(item2);
        order4.addItem(item4);

        order5.addItem(item1);
        order5.addItem(item1);

        order1.setReadyTrue();
        order1.getStatusMessage();
        order2.getStatusMessage();
        order3.setReadyTrue();
        order3.getStatusMessage();
        order4.getStatusMessage();
        order5.getStatusMessage();
        
        System.out.println(order1.getOrderTotal());
        System.out.println(order2.getOrderTotal());
        System.out.println(order3.getOrderTotal());
        System.out.println(order4.getOrderTotal());
        System.out.println(order5.getOrderTotal());

        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();

    }
}
