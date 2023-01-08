from classtest.Counter import Counter


counter = Counter(100)
counter.increment(3)
counter.decrement(10)

print(counter.get_value())

print(type(counter))
