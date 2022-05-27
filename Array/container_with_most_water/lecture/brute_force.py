def solution(numbers):
    max_area = 0
    for i in range(len(numbers)):
        for j in range(i, len(numbers)):
            area = (j - 1) * min(numbers[i], numbers[j])
            max_area = max(max_area, area)
    return max_area