class User:
    def __init__(self,first_name,last_name,email,age):
        self.fname = first_name
        self.lname = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print('First Name:', self.fname)
        print('Last Name:', self.lname)
        print('Email:', self.email)
        print('Age:', self.age)
        print('Member:', self.is_rewards_member)
        print('Points:', self.gold_card_points)

    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member =  True
            self.gold_card_points = 200
        else:
            print('User already a member')
        

    def spend_points(self,amount):
        if self.gold_card_points - amount < 0:
            print('User doesnt have enough points')
        else:
            self.gold_card_points -= amount

david = User('David','Ezeokeke','davideze.eze@gmail.com',21)
john = User('John','Jack','johnjack@gmail.com',22)
david.display_info()
john.display_info
david.enroll()
john.enroll()
david.display_info()
john.display_info()
david.enroll()
david.spend_points(100)
john.spend_points(80)
david.display_info()
john.display_info()
david.spend_points(999)
