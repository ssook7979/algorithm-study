from collections import defaultdict

def is_safe(adj, color_map, idx, color):
    for node in adj[idx]:
        if color_map[node] == color:
            return False
    return True

def solve(adj, color_map, k, V, init):
    if init == V and None not in set(color_map):
        return True
    for i in range(init, V):
        if color_map[i] == None:
            for color in range(k):
                if is_safe(adj, color_map, i, color):
                    color_map[i] = color
                    if solve(adj, color_map, k, V, i + 1):
                        return True
                    color_map[i] = None
        else:
            solve(adj, color_map, k, V, i + 1)
    return False

def graphColoring(graph, k, V):
    adj = defaultdict(set)
    color_map = [None] * V
    for node1, node2 in graph:
        adj[node1].add(node2)
        adj[node2].add(node1)
    print(solve(adj, color_map, k, V, 0))

graphColoring([[0,1],[1,2],[0,2]], 2, 3)