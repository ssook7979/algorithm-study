from collections import defaultdict
from re import L

def solutions(prerequisites):
    adj = defaultdict(list)
    subs = set()
    q = []

    for sub, pre in prerequisites:
        adj[sub].append(pre)
        subs.add(sub)
        subs.add(pre)
    s0 = list(subs - set(adj.keys()))

    q.append(s0[0])

    while len(q):
        s = q.pop()
        q.append(adj[s].pop())
        if s not in subs:
            return False
        else:
            subs.remove(s)
    return True
        
    