import java.util.ArrayList;

class Orders {
    // MEMBER VARIABLES
    private String name;
    private boolean ready;
    private ArrayList<Items> items;

    // CONSTRUCTOR
    public Orders() {
        // No arguments, sets name to "Guest", initializes items as an empty list.
        this.name = "Guest";
        this.items = new ArrayList<Items>();
    }

    // OVERLOADED CONSTRUCTOR
    public Orders(String name) {
        // Takes a name as an argument, sets name to this custom name.
        this.name = name;
        // Initializes items as an empty list.
        this.items = new ArrayList<Items>();
    }

    // ORDER METHODS
    // Most of your code will go here,
    // so implement the getters and setters first!
    public void addItem(Items Items) {
        this.items.add(Items);
    }

    public void getStatusMessage() {
        System.out.println(this.ready ? "Your order is ready" : "Thank you for waiting. Your order will be ready soon");
    }

    public double getOrderTotal() {
        double orderTotal = 0;
        for (int i = 0; i < this.items.size(); i++) {
            ArrayList<Items> order = this.getItems();
            for (int j = 0; i < order.size(); i++) {
                double currentItemPrice = order.get(i).getPrice();
                orderTotal = orderTotal + currentItemPrice;
            }
        }
        return orderTotal;
    }

    public void display() {
        double total = 0;
        System.out.printf("Customer Name: %s\n", this.getName());
        for (int i = 0; i < this.items.size(); i++) {
            ArrayList<Items> order = this.getItems();
            for (int j = 0; i < order.size(); i++) {
                System.out.printf("%s - $%,.2f\n", order.get(i).getName(), order.get(i).getPrice());
            }
        }
        total = this.getOrderTotal();
        System.out.printf("Total: $%,.2f", total);
    }

    // GETTERS & SETTERS
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean getReady() {
        return ready;
    }

    public void setReadyTrue() {
        this.ready = true;
    }

    public void setReadyFalse() {
        this.ready = false;
    }

    public ArrayList<Items> getItems() {
        return items;
    }
}
