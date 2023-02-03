#basic
for x in range(151):
    print(x)
#multiples of 5
for x in range(5,1005,5):
    print(x)
#counting the dojo way
for x in range(101):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)
#whoa that suckers huge
sum = 0
for x in range(500000):
    if x % 2 != 0:
        sum += x
print(sum)
#countdown by 4s
for x in  reversed(range(2,2020,4)):
    print(x)
#flexible counter
lowNum = 2
highNum = 9
mult = 3
for x in range(lowNum,highNum+1):
    if x % mult == 0:
        print(x)