function isAcyclic(links) {
  let l, r;
  const graph = new Array(links.length).fill(null).map([]);
  const indegreeMap = {}
  const q = []

  for (let i = 0; i < links.length; i++) {
    [l, r] = links[i];
    graph[r].push(l);
    
  }

}