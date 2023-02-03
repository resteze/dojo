import random
class Ninja:

    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.health = 100
        self.energy = 0
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nHealth: {self.health}\nEnergy: {self.energy}\n")

    def attack( self , pirate ):
        pirate.health -= self.strength
        self.energy += random.randrange(4,8)
        print(f'{self.name} attacked {pirate.name} inflicted {self.strength} damage and {pirate.name} has {pirate.health}')
        return self
    def ninjaAbility1(self, pirate):
        if self.energy >= 20:
            self.energy -= 20
            pirate.health -= 1.5*self.strength
        else:

            print('Not enough energy')
    def ninjaAbility2(self):
        if self.energy >= 30:
            self.energy -= 30
            self.strength += random.randrange(5,10)
            print('Micheal Angelo meditates and his attack increases')
        else:
            print('Not enough energy')