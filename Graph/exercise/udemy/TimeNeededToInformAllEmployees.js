function timeNeededToInform(managers, informTime) {
  
  function dfs(graph, vertex, informTime, t) {
    const vertices = graph[vertex];
    const result = [];

    for (let i = 0; i < vertices.length; i++) {
      result.push(dfs(graph, vertices[i], informTime, informTime[vertex]));
    }

    return t + (result.length > 0 ? Math.max(...result) : 0);
  }

  let headId, graph = new Array(managers.length).fill(null).map(() => new Array());

  for (let i = 0; i < managers.length; i++) {
    if (managers[i] === -1) {
      headId = i;
      continue;
    }

    graph[managers[i]].push(i);
  }

  return dfs(graph, headId, informTime, 0);
}

console.log(timeNeededToInform(
  [2, 2, 4, 6, -1, 4, 4, 5],
  [0, 0, 4, 0, 7, 3, 6, 0]
));