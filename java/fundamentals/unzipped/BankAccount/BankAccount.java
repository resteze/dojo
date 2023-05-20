public class BankAccount {
    private double checking;
    private double savings;
    public static int numOfAccounts = 0;
    public static double totalMoney;

    //constructor
    public BankAccount(double checking, double savings) {
        this.checking = checking;
        totalMoney = totalMoney + checking;
        this.savings = savings;
        totalMoney = totalMoney + savings;
        numOfAccounts++;
    }

    //getters
    public double getChecking(){
        return checking;
    }
    public double getSavings(){
        return savings;
    }

    //setters
    public void addMoney(String account, double money){
        if (account == "checking"){
            this.checking = this.checking + money;
        }
        if (account == "savings"){
            this.savings = this.savings + money;
        }
        totalMoney = totalMoney + money;
    }
    public void withdrawMoney(String account, double money){
            if (account == "checking"){
                if (this.checking < money){
                    System.out.println("You have insufficient funds");
                }else{
                    this.checking = this.checking - money;
                    totalMoney = totalMoney - money;
                }
            }
            if (account == "savings"){
                if (this.savings < money){
                    System.out.println("You have insufficient funds");
                }else{
                this.savings = this.savings - money;
                totalMoney = totalMoney - money;
            }
            
        }
    }
    public void display(){
        System.out.printf("Checkings: $%,.2f\n", this.checking);
        System.out.printf("Savings: $%,.2f\n", this.savings);
        System.out.printf("Total Money: $%,.2f\n", this.totalMoney);
    }
}
