class Solution:
    def solve(self, sum, m, start):
        if sum == self.total / 2:
            return True
        for i in range(start, self.N):
            if not m[i]:
                sum += self.arr[i]
                m[i] = True
                if self.solve(sum, m[:], start + 1) == True:
                    return 'YES'
                sum -= self.arr[i]
                m[i] = False
        return 'No'

    def equalPartition(self, N, arr):
        self.N = N
        self.arr = arr
        self.total = sum(arr)

        return self.solve(0, [False] * N, 0)

print(Solution().equalPartition(4, [1,5,11,5]))