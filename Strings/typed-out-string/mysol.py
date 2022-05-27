# https://leetcode.com/problems/backspace-string-compare/

from collections import deque


def solution(s, t):
    stack_s = []
    for ss in s:
        if ss == '#':
            stack_s.pop()
        else:
            stack_s.append(ss)
    stack_t = []
    for tt in t:
        if tt == '#':
            stack_t.pop()
        else:
            stack_t.append(tt)

    if len(stack_s) != len(stack_t):
        return False

    for ss, tt in zip(stack_s, stack_t):
        if ss != tt:
            return False
    return True

print(solution("ab#c", "ad#c")) # True
print(solution("ab##", "c#d#")) # True
print(solution("a#c", "b")) # False

# after seeing hint
# - utilize existing stirngs
# - use two pointers
# - start from the end of the strings

def solution_updated(s, t):
    i, j = [len(s) - 1, len(t) - 1]
    while i >= 0 or j >= 0:
        if s[i] == '#' or t[j] == '#':
            if s[i] == '#':
                cnt_back = 2
                while cnt_back > 0 and i >= 0:
                    if s[i] == '#':
                        cnt_back += 1
                        i -= 1
                    else:
                        i -= 1
                        cnt_back -= 1
            if s[j] == '#':
                cnt_back = 2
                while cnt_back > 0 and j >= 0:
                    if s[j] == '#':
                        cnt_back += 1
                        j -= 1
                    else:
                        j -= 1
                        cnt_back -= 1
        else:
            if s[i] != t[j]:
                return False
            i -= 1
            j -= 1
    return True

print(solution_updated("ab#c", "ad#c")) # True
print(solution_updated("ab##", "c#d#")) # True
print(solution_updated("a#c", "b")) # False