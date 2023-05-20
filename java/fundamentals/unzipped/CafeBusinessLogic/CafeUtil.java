import java.util.ArrayList;

public class CafeUtil {
    public int getStreakGoal() {
        int sum = 0;
        int count = 0;
        while (count < 10) {
            count++;
            sum = sum + count;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double orderTotal = 0.0;
        for (int i = 0; i < prices.length; i++) {
            orderTotal += prices[i];
        }
        return orderTotal;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            String item = menuItems.get(i);
            System.out.format("%d %s %n", i, item);
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.format("Hello, %s %n", userName);
        System.out.format("There are %d people in front of you", customers.size());
        customers.add(userName);
        System.out.println(customers);
    }
}