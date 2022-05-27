def build_string(string):
    built_string = []
    for c in string:
        if c != '#':
            built_string.append(c)
        else:
            built_string.pop()
    return built_string

def solution(s, t):
    built_s = build_string(s)
    built_t = build_string(t)

    if len(built_s) != len(built_t):
        return False
    
    for ss, tt in zip(built_s, built_t):
        if ss != tt:
            return False
    return True