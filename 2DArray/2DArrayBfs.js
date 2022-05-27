const directions = [
  [0, 0],
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];
function breathFirstSearch(matrix, row=0, col=0) {
  const seen = new Array(matrix.length).fill(null).map(() => new Array(matrix[0].length).fill(false));
  const visited = [];
  const queue = [[row, col]];
  while(queue.length > 0 && row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
    [row, col] = queue.pop();
    directions.forEach(([r, c], idx) => {
      if (row + r >= 0 && row + r < matrix.length && col + c >= 0 && col + c < matrix[0].length && !seen[row + r][col + c]) {
        visited.push(matrix[row + r][col + c]);
        seen[row + r][col + c] = true;
        idx > 0 && queue.unshift([row + r, col + c]);
      }
    });
  }
  return visited;
}

console.log(breathFirstSearch([[1,2,3,4],[5,6,7,8]]))