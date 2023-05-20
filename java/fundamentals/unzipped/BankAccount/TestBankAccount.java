public class TestBankAccount {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(0,0);

        account1.addMoney("checking", 50);
        account1.display();
        account1.withdrawMoney("savings", 50);
        account1.withdrawMoney("checking", 25);
        account1.display();
    }
}
