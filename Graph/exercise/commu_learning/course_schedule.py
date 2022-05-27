from collections import defaultdict

def solution(s1, s2, k):
    indegree_dict = defaultdict(set)
    s_total = set()
    answer = []
    for ss1, ss2 in zip(s1, s2):
        indegree_dict[ss1].add(ss2)
        s_total.add(ss1)
        s_total.add(ss2)
    
    while len(s_0):
        s_0 = list(s_0)
        s_0.sort(reverse=True)
        for s in s_0:
            answer.push(s)
            if s == k:
                break
            
    