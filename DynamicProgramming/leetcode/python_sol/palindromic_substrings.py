def count_substrings(s):
    dp_count = [[None] * len(s) for _ in range(len(s))]
    dp_tf = [[None] * len(s) for _ in range(len(s))]
    result = list(s)

    #def count_dp(i, j):
    #    print((i, j), end=', ')
    #    if not (i <= j and 0 <= j < len(s)):
    #        return 0
    #    if i == j:
    #        dp_tf[i][j] = True
    #        dp_count[i][j] = 1
    #    elif j - i == 1:
    #        dp_tf[i][j] = s[i] == s[j]
    #        dp_count[i][j] = count_dp(i + 1, j) + count_dp(i, j - 1)
    #        if s[i] == s[j]:
    #            dp_count[i][j] += 1
    #    else:
    #        dp_count[i][j] = count_dp(i + 1, j) + count_dp(i, j - 1) - count_dp(i + 1, j - 1)
#
    #        if dp_tf[i + 1][j - 1] and s[i] == s[j]:
    #            dp_count[i][j] += 1
    #            dp_tf[i][j] = True
    #    return dp_count[i][j]

    def count_dp(i, j):
        if i > j:
            return 0

        if dp_count[i][j] != None:
            return dp_count[i][j]
        
        if i == j:
            dp_count[i][j] = 1
            return dp_count[i][j]

        elif s[i] == s[j]:
            dp_count[i][j] = count_dp(i + 1, j)\
                + count_dp(i, j - 1) + 1 - count_dp(i + 1, j - 1)
            return dp_count[i][j]
        else:
            dp_count[i][j] = count_dp(i + 1, j) \
                + count_dp(i, j - 1) \
                - count_dp(i + 1, j - 1)
            return dp_count[i][j]
        

    return count_dp(0,len(s) - 1)
print(count_substrings('aab'))
