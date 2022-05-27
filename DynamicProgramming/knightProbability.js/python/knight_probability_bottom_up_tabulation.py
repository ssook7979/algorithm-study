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
    dp = [[[0] * n for _ in range(n)] for _ in range(k)]

    def within_boundary(row, col):
        return 0 <= row < n and 0 <= col < n
    
    dp[0][r][c] = 1

    for kk in range(1, k):
        for rr in range(n):
            for cc in range(n):
                for dr, dc in dirs:
                    if within_boundary(rr + dr, cc + dc):
                        dp[kk][rr][cc] += dp[k-1][rr + dr][cc + dc] / len(dirs)
    
    return dp[k][r][c]
print(solution(6, 3, 2, 2))