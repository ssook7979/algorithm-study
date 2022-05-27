from collections import Counter, defaultdict

answer = ['ICN']

def solve(t_cnt, adj, city):
    if sum(t_cnt.values()) == 0:
        return True
    for other_city in adj[city]:
        ticket = f'{city}-{other_city}'
        if t_cnt[ticket] > 0:
            t_cnt[ticket] -= 1
            answer.append(other_city)
            if solve(t_cnt, adj, other_city):
                return True
            t_cnt[ticket] += 1
            answer.pop()
    return False

def solution(tickets):
    adj = defaultdict(list)
    for dpt, arv in tickets:
        adj[dpt].append(arv)
    for _, v in adj.items():
        v.sort()
    t_cnt = Counter([f'{dpt}-{arv}' for dpt, arv in tickets])
    solve(t_cnt, adj, "ICN")
    return answer

'''
    response
        - T: if current state is valid and next recursive call returns True
        - F: if current state is invalid or current state is valid and recursive call returns False
    decision
    - valid
        - adj_idx within range, tickets are left
    - invalid
        - adj_idx is out of range
    - if tickets aren't left then increase adj_idx
'''