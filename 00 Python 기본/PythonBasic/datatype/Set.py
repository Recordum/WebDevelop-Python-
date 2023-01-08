# 집합(set)자료형
# 중복 허용 x
# 순서가 없다

data = set([1, 2, 2, 3, 4, 5])

print(data)

data2 = set([4, 5, 6, 7])

print(data2)

# 합집합/교집합/차집합

print(data | data2)
print(data & data2)
print(data - data2)

# 추가/ 삭제
data.add(6)
print(data)
data.remove(6)
print(data)
data.update([1000, 2000]) # 여러 원소 추가
print(data)