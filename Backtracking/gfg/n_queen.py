class Solution:
    solutions = []

    def is_safe(self, row, col):
        board = self.board
        n = self.n
        
        for i in range(col):
            if board[row][i]:
                return False
        
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j]:
                return False
        
        for i, j in zip(range(row, n, 1), range(col, -1, -1)):
            if board[i][j]:
                return False
        return True

    def solve(self, col, solution):
        n = self.n
        board = self.board

        if col >= n:
            return True
        
        for i in range(n):
            if self.is_safe(i, col):
                board[i][col] = True
                solution[i] = col + 1
                if self.solve(col + 1, solution):
                    self.solutions.append(solution[:])
                solution[i] = None
                board[i][col] = False
        return False

    def print(self):
        for i in range(self.n):
            for j in range(self.n):
                end = "\n" if j == self.n - 1 else " "
                print(1 if self.board[i][j] else 0, end = end)

    def print_cols(self, cols):
        for i in range(self.n):
            for j in range(self.n):
                end = "\n" if j == self.n - 1 else " "
                print(1 if j == cols[i] - 1 else 0, end = end) 

    def nQueen(self, n):
        self.board = [[False] * n for _ in range(n)]
        self.n = n

        self.solve(0, [None] * n)
        self.solutions.sort()
        return self.solutions

s = Solution()
s.nQueen(8)
#s.print_cols([1, 3, 6, 8, 2, 4, 9, 7, 5])
print(s.solutions)