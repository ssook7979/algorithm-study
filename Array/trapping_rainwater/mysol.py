def solution(numbers):
    i, j, s = [0, 1, 0]
    while j < len(numbers):
        if numbers[j] >= numbers[i]:
            s += (j - i - 1) * numbers[i]
            i = j
        elif j == len(numbers) - 1:
            s += (j - i - 1) * numbers[j]
        else:
            s -= numbers[j]
        j += 1
    return s

print(solution([0,1,0,2,1,0,3,1,0,1,2])) # 8
print(solution([])) # 0
print(solution([3])) # 0
print(solution([3, 4, 3])) # 0