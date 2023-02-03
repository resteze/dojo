class BankAccount:
    all_accounts = []
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance = 0): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        self.intRate = int_rate/100 + 1
        self.balance = balance
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance < amount:
            print('Insufficient Funds: Charging a $5 fee')
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(f'Balance: ${self.balance}')
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance *= self.intRate
        return self
    @classmethod
    def all_account_info(cls):
        for account in cls.all_accounts:
            print(f'Balance: ${account.balance}')
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate = 2, balance = 0) 
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        print(self.account.balance)

    def make_withdrawal(self,amount):
        self.account.withdraw(amount)
        print(self.account.balance)

    def display_user_balance(self):
        self.account.display_account_info()

john = BankAccount(1)
david = BankAccount(5,500)
david.deposit(50).deposit(100).deposit(33).withdraw(50).yield_interest().display_account_info()
john.deposit(30).deposit(40).withdraw(10).withdraw(50).withdraw(30).yield_interest().display_account_info()
BankAccount.all_account_info()

userDavid = User('David','davideze.eze@gmail.com')
userDavid.make_deposit(50)
userDavid.make_withdrawal(25)
userDavid.display_user_balance()