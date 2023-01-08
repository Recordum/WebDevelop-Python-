# return DataType 이 일치 하지 않아도 된다.


def myFunction(a, b):
    c = [1, 2, 3, 4, 5]
    if a + b == 0:
        return True
    else:
        return c


print(myFunction(5, 6))
print(myFunction(1, -1))


# Lamda
def add(a, b):
    return a + b


print(add(1, 2))
print((lambda a, b: a + b)(1, 2))

counter = Counter()
