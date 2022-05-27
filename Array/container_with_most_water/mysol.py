def solution(numbers):
    i, j, max_area = [0, len(numbers) - 1, 0]
    while j > i:
        if numbers[i] < numbers[j]:
            area = (j - i) * numbers[i]
            i += 1
        else:
            area = (j - i) * numbers[j]
            j -= 1
        max_area = max(max_area, area)
    return max_area

print(solution([1,8,6,2,9,4])) # 24
print(solution([7,1,2,3,9])) # 28
print(solution([6,9,3,4,5,8])) # 32
print(solution([])) # 0
print(solution([7])) # 0