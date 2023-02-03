import random
class Pirate:
    damage_took = 0
    def __init__( self , name ):
        self.name = name
        self.strength = 15
        self.health = 100
        self.energy = 0
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nHealth: {self.health}\nEnergy: {self.energy}\n")
    def attack ( self , ninja ):
        ninja.health -= self.strength
        self.energy  += random.randrange(2,6)
        print(f'{self.name} attacked {ninja.name} inflicted {self.strength} damage and {ninja.name} has {ninja.health}')
        return self

    def pirateAbility1(self,ninja):
        if self.energy >= 20:
            self.energy -= 20
            ninja.health -= 1.5*self.strength
        else:
            print('Not enough energy')

    def pirateAbility2(self):
        if self.energy >= 30:
            self.energy -= 30
            self.health += random.randrange(10-50)
            print('Jack Sparrow eats an orange and gains health')
        else:
            print('Not enough energy')
