my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}
print(my_dict)
print(my_dict['name'])  # Output: John
my_dict['age'] = 26  # Modifying a value
my_dict['occupation'] = 'Engineer'  # Adding a new key-value pair
print(my_dict)

del my_dict['city']  # Removing a key-value pair

if 'age' in my_dict:
    print('Age is present in the dictionary')
    
for key, value in my_dict.items():
    print(key, value)
    
print(my_dict.keys())

