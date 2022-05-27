function depthFirstSearch(matrix) {  
  function traverse(matrix, visited, seen, direction, row, col) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
      if (!seen[row][col]) {
        visited.push(matrix[row][col]);
        seen[row][col] = true;
        direction.forEach(( [ r, c ] ) => {
          traverse(matrix, visited, seen, direction, row + r, col + c);
        });
      }
    }
  }
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  const seen = new Array(matrix.length).fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const visited = []
  traverse(matrix, visited, seen, direction, 0, 0);
  return visited;
}

console.log(depthFirstSearch([[1,2,3,4],[5,6,7,8]]))