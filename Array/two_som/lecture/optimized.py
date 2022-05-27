def solution(numbers, target):
    num_hash = {}
    for idx, number in enumerate(numbers):
        num_hash[number] = idx
    for idx, number in enumerate(numbers):
        num_to_find = target - number
        if num_to_find in num_hash:
            return [idx, num_hash[num_to_find]]

print(solution([1, 3, 7, 9, 2], 11)) # [3,4]
print(solution([1, 3, 7, 9, 2], 25)) # None
print(solution([], 1)) # None
print(solution([5], 5)) # None
print(solution([1, 6], 7)) # [0, 1]