from collections import defaultdict


def solutions(prerequisites):
    adj = defaultdict(list)
    subs = set()
    taken = []

    for sub, pre in prerequisites:
        adj[sub].append(pre)
        subs.add(sub)
        subs.add(pre)
    s0 = list(subs - set(adj.keys()))

    s = s0[0]

    while len(adj[s]):
        s = adj[s].pop()
        if s not in subs:
            return []
        else:
            subs.remove(s)
            taken.append(s)
    return taken