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
        return self

    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member =  True
            self.gold_card_points = 200
        else:
            print('User already a member')
        return self

    def spend_points(self,amount):
        if self.gold_card_points - amount < 0:
            print('User doesnt have enough points')
        else:
            self.gold_card_points -= amount
        return self

david = User('David','Ezeokeke','davideze.eze@gmail.com',21)
john = User('John','Jack','johnjack@gmail.com',22)
david.display_info().enroll().display_info().enroll().spend_points(80).display_info().spend_points(999)
john.display_info().enroll().display_info().spend_points(100).display_info()