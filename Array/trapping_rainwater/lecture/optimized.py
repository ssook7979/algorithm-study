# TODO:
def solution(numbers):
    i, j, s, max_i, max_j = [0, len(numbers) - 1, 0, 0, 0]
    while i < j:
        if numbers[i] <= numbers[j]:
            if numbers[i] >= max_i:
                max_i = numbers[i]
            else:
                s += max_i - numbers[i]
            i += 1
        else:
            if numbers[j] >= max_j:
                max_j = numbers[j]
            else:
                s += max_j - numbers[j]
            j -= 1
    return s