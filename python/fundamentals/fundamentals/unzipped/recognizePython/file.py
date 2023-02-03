num1 = 42 #variable declaration, int number,
num2 = 2.3 #variable declaration, float number
boolean = True #variable declaration, boolean
string = 'Hello World'#variable declaration, string 
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, list intialized
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, dictionary intialized
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, tuple intialized
print(type(fruit))#log statement, type check 
print(pizza_toppings[1])#log statement, list value accessed
pizza_toppings.append('Mushrooms')#list value added
print(person['name'])#log statement, dictionary value accessed
person['name'] = 'George'#dictionary value changed
person['eye_color'] = 'blue'#dictonary value added
print(fruit[2])#log statement, tuple value accessed

if num1 > 45:#if conditional
    print("It's greater")#log statement of static string
else:#else conditional
    print("It's lower")#log statement of static string

if len(string) < 5:#if conditional
    print("It's a short word!")#log statement of static string
elif len(string) > 15:#else if conditional
    print("It's a long word!")#log statement of static string
else:#else conditional
    print("Just right!")#log statement of static string

for x in range(5):#for loop start but stops at 5
    print(x)#log statement
for x in range(2,5):#for loop starts at 2 stops at 5
    print(x)#log statement
for x in range(2,10,3):#for loop starts at 2 stops at 10 increments 3 each lap
    print(x)#log statement
x = 0 #variable declaration int number
while(x < 5):#while loop starts and doesnt end until x > 5
    print(x)#log statement
    x += 1# while loop increment

pizza_toppings.pop()#last list value deleted
pizza_toppings.pop(1)# 2nd list value deleted

print(person)#log statement of dictionary
person.pop('eye_color')#dictionary index eye color deleted
print(person)#log statement of dictionary

for topping in pizza_toppings:#for loop starts at beginning of list and stops at the end
    if topping == 'Pepperoni':#if conditional
        continue#continues running the loop
    print('After 1st if statement')#log statement of static string
    if topping == 'Olives':#if conditional 
        break#breaks the loop

def print_hello_ten_times():#function defined
    for num in range(10):#for loop starts at 0 ends at 10
        print('Hello')# log statement of static string

print_hello_ten_times()#function called

def print_hello_x_times(x):#funtion defined  
    for num in range(x):#for loop x setting the parameters for the loop
        print('Hello')#log statement of static string

print_hello_x_times(4)# funtion called setting the parameter of the loop at 4

def print_hello_x_or_ten_times(x = 10):#funtion defined and x is defined as 10
    for num in range(x):#for loop x setting the parameters for the loop
        print('Hello')#log statement of static string

print_hello_x_or_ten_times()#funtion called
print_hello_x_or_ten_times(4)#function called but x is set as 4


"""
Bonus section
"""

# print(num3) nameError
# num3 = 72 
# fruit[0] = 'cranberry' typeError
# print(person['favorite_team']) keyError
# print(pizza_toppings[7])indexError
#   print(boolean) indentationError
# fruit.append('raspberry') attributeError
# fruit.pop(1) attributeError