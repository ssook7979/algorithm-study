def solution(numbers):
    s = 0
    for i in range(len(numbers)):
        left = i
        right = i
        max_left = 0
        max_right = 0

        while left >= 0:
            max_left = max(max_left, numbers[left])
            left -= 1
        
        while right < len(numbers):
            max_right = max(max_right, numbers[right])
            right += 1
        
        current_s = min(max_left, max_right) - numbers[i]
        if current_s > 0:
            s += current_s
    return s

print(solution([0,1,0,2,1,0,3,1,0,1,2])) # 8
print(solution([])) # 0
print(solution([3])) # 0
print(solution([3, 4, 3])) # 0