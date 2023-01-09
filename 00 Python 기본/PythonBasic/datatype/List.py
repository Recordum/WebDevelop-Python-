
# 리스트 초기화 방법
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

b = list()

c = []

# 같은 value 로 초기화

n = 10 # list 크기
d = [0] * n


print(a, b, c, d)

# 인덱싱과 슬라이싱
print(a[-1]) #뒤에서 첫번째 원소
print(a[-3]) #뒤에서 세번째 원소

print(a[1:4]) #두번째 원소부터 네 번째 원소까지

# 리스트 컴프리헨션
array = [i for i in range(20) if i % 2] # 0 부터 19 까지 수 중 홀수만 포함하는 리스트
print(array)

# 2차원 행렬 리스트 컴프리헨션
n = 3
m = 4

matrix = [[0] * m for _ in range(n)]
print(matrix)

#List 메서드

a.sort(reverse = True) # 내림차순 정렬
print(a)

a.sort() # 오름차순 정렬
print(a)

a.insert(0, 1000) # 인덱스에 데이터 삽입
print(a)

a.remove(1000) # 해당 value 삭제
print(a)

a.insert(0, 1000)
print(a)

a.pop(0) # 해당 index 삭제
print(a)

