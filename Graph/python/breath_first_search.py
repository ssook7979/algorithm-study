from collections import deque

def breath_first_search(start):
    neighbors = [] # some values...
    q = deque([start])
    seen = set()
    visited = []
    node = ''
    while len(q):
        node = q.popleft()
        if node in seen:
            continue
        visited.push(node)
        q.expand(neighbors)
        seen.add(node)
    return visited
