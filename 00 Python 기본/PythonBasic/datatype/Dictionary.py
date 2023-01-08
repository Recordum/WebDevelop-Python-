# 사전 자료형

data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'banana'
data[1] = 5

print(data)

# 사전 자료형 메소드
keyList = data.keys();
valueList = data.values()

print(keyList)

for key in keyList:
    print(data[key])


