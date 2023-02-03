from classes.ninja import Ninja
from classes.pirate import Pirate
import random

michelangelo = Ninja("Michel Angelo")

jack_sparrow = Pirate("Jack Sparrow")

# whosFirst = random.randrange(1,2)
# if whosFirst == 1:
#     print('Micheal goes first')
#     p1 = michelangelo.attack(jack_sparrow)
#     michelangelo.show_stats()
#     p2 = jack_sparrow.attack(michelangelo)
#     michelangelo.show_stats()

# else:
#     print('Jack goes first')
#     p1 = jack_sparrow.attack()
#     michelangelo.show_stats()
#     p2 = michelangelo.attack()
#     michelangelo.show_stats() 
while michelangelo.health > 0 and jack_sparrow.health > 0:
    jack_sparrow.attack(michelangelo)
    michelangelo.attack(jack_sparrow)
    if jack_sparrow.health <= 0:
        print("Micheal Angelo has Won!")
        michelangelo.show_stats()
        jack_sparrow.show_stats()
        break
    elif jack_sparrow.health <= 0 and michelangelo.health <= 0:
        print("It was a draw!")
        michelangelo.show_stats()
        jack_sparrow.show_stats()
        break
    elif michelangelo.health <= 0:
        print("Jack Sparrow Won!")
        michelangelo.show_stats()
        jack_sparrow.show_stats()
        break
    if michelangelo.energy >= 20:
        response = input(f'Micheal Angelo has {michelangelo.energy} energy. Do u want to use an Ability \n Yes \n No >>>>')
        if response == 'Yes':
            response2 = input('Which one? \n 1:Shuriken Throw Cost 20\n 2 Meditate Cost 30\n Nvm >>>>')
            if response2 == '1':
                michelangelo.ninjaAbility1(jack_sparrow)
                print('Micheal Angelo throws a shuriken')
                jack_sparrow.show_stats()
            elif response2 == '2':
                michelangelo.ninjaAbility2(jack_sparrow)
                michelangelo.show_stats()
            elif response2 == 'Nvm':
                print('Ok')
            else:
                print('>>>> Please enter a valid response')
            
        elif response == 'No':
            print('Ok')
        else:
            print('Please enter a valid response')
    if jack_sparrow.energy == 20:
        response = input(f'Jack Sparrow has {jack_sparrow.energy} energy.Do u want to use an Ability \n Yes \n No >>>>')
        if response == 'Yes':
            response2 = input('Which one? \n 1 Blunderbuss Cost 20\n 2 Eat Orange Cost 30 \n Nvm >>>>')
            if response2 == '1':
                jack_sparrow.pirateAbility1()
                print('Jack Sparrow shoots his blunderbuss')
                michelangelo.show_stats()
            elif response2 == '2':
                jack_sparrow.pirateAbility2()
                jack_sparrow.show_stats()
            elif response2 == 'Nvm':
                print('Ok')
            else:
                print('>>>> Please enter a valid response')
            
        elif response == 'No':
            print('Ok')
        else:
            print('Please enter a valid response')

