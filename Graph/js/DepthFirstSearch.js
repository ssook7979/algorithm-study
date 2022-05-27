function depthFirstSearch(vertex, graph, values=[], seen={}) {
  values.push(vertex);
  seen[vertex] = true;
  const neighbors = graph[vertex];
  
  for (let i = 0; i < neighbors.length; i++) {
    let n = neighbors[i];
    if (!seen[n]) {
      depthFirstSearch(vertex, graph, values, seen);
    }
  }

}