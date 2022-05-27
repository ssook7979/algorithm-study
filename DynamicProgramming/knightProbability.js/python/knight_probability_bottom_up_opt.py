from collections import deque


dirs = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1]
]

def solution(n, k, r, c):
    def within_boundary(row, col):
        return 0 <= row < n and 0 <= col < n

    dp_prev = [[0] * n for _ in range(n)]
    dp = [[0] * n for _ in range(n)]
    dp_prev[r][c] = 1

    for _ in range(k):
        for row in range(n):
            for col in range(n):
                for dr, dc in dirs:
                    if (within_boundary(row + dr, col + dc)):
                        dp[row][col] += dp_prev[row + dr][col + dc] / 8
        dp_prev = dp
        dp = [[0] * n for _ in range(n)]
    
    s = 0
    for dp_r in dp_prev:
        s += sum(dp_r)
    return s
print(solution(6, 2, 2, 2))