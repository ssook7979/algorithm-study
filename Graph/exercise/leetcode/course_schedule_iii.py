def solutions(courses):
    courses.sort(key=lambda x: x[1])

    def solve(i, total_time, cnt):
        if i == len(courses):
            return cnt
        duration, last_day = courses[i]
        total_time += duration
        cnt += 1
        if total_time > last_day:
            total_time -= duration
            cnt -= 1
        return solve(i + 1, total_time, cnt)
    
    return solve(0, 0, 0)


print(solutions([[100,200],[200,1300],[1000,1250],[2000,3200]]))
    