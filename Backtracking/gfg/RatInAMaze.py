class Solution:
    directions = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    }
    solution = set()
    def _dfs(self, m, row, col, path):
        if row == len(m) - 1 and col == len(m) - 1:
            return path
        for d, [r, c] in self.directions.items():
            if row + r in range(len(m)) and \
                col + c in range(len(m)) and m[row + r][col + c]:
                path.append(d)
                m[row][col] = 0
                sol = self._dfs(m, row + r, col + c, path)
                if sol:
                    self.solution.add("".join(sol))
                path.pop()
                m[row][col] = 1
        return []
    def findPath(self, m, n):
        self._dfs(m, 0, 0, [])
        return list(self.solution)

s = Solution()
N = 2
m = [[1, 0],
    [1, 0]]
print(s.findPath(m, N))