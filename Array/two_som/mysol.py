def solution(numbers, target):
    nums = [(idx, num) for idx, num in enumerate(numbers)]
    nums.sort(key=lambda x: x[1])
    i, j, s = [0, len(numbers) - 1, 0]

    while j > i:
        s = nums[i][1] + nums[j][1]
        if s < target:
            i += 1
        elif s > target:
            j -= 1
        else:
            return sorted([nums[i][0], nums[j][0]])
    return None

# test cases
print(solution([1, 3, 7, 9, 2], 11)) # [3,4]
print(solution([1, 3, 7, 9, 2], 25)) # None
print(solution([], 1)) # None
print(solution([5], 5)) # None
print(solution([1, 6], 7)) # [0, 1]
