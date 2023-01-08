class Counter:

    def __init__(self, value):
        self.__value = value

    def increment(self, delta):
        self.__value += delta

    def decrement(self, delta):
        self.__value -= delta

    def get_value(self):
        return self.__value



