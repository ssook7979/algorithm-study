from functools import reduce


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

def solution(n, k, start_pt):
    dp = [[-1] * n for _ in range(n)]

    def within_boundary(row, col):
        return 0 <= row < n and 0 <= col < n

    def solve(row, col, cnt):
        if not within_boundary(row, col):
            return 0
        if cnt == k:
            return 1
        if dp[row][col] == -1:
            tmp = 0
            for dr, dc in dirs:
                tmp += solve(row + dr, col + dc, cnt + 1)
            dp[row][col] = tmp / 8
        return dp[row][col]

    if k == 0 and within_boundary(*start_pt):
        return 1
    return solve(*start_pt, 0)

print(solution(6, 2, [2, 2]))