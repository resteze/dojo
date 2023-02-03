x = [[5, 2, 3], [10, 8, 9]]
students = [
    { 'first_name': 'Michael', 'last_name': 'Jordan' },
    { 'first_name': 'John', 'last_name': 'Rosales' },
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{ 'x': 10, 'y': 20 }]
x[1][0] = 15
students[0]['last_name'] = 'Bryant'
sports_directory['soccer'][0] = 'Andres'
z[0]['y'] = 30

print(x)
print(z)
print(students)
print(sports_directory)

def iterateDictionary(some_list):
    for i in range(len(some_list)):
        for key, value in some_list[i].items():
            print(key,value)
iterateDictionary(students)
#come back to this

def iterateDictionary2(key_name, some_list):
    for i in range(len(some_list)):
            print(some_list[i][key_name])
iterateDictionary2('first_name',students)
iterateDictionary2('last_name', students) 

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(some_dict):
    for key in some_dict:
        print (len(some_dict[key]), key.upper())
        for i in range(len(some_dict[key])):
            print(some_dict[key][i])
printInfo(dojo)
