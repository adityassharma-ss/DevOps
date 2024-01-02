x = [1, 2, 3]
y = x  # y now refers to the same object as x
result = x is y

a = "hello"
b = "world"
result_1 = a is not b
# result will be True

print(result)
print(result_1)

fruits = ["apple", "banana", "cherry"]
result_2 = "banana" in fruits
# result will be True

print(result_2)
