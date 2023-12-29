import math

# Use functions/variables from the module
result = math.sqrt(16)
print(result)

# Import specific function/variable from a module
from math import pi
print(pi)


def nem(x):
    return x ** 2

def main():
    print(nem(2))
    
if __name__ == "__main__":
    main()