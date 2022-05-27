const direction = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1]
]

var isOnBoard = function(n, row, column) {
  return row >= 0 && row < n && column >= 0 && column < n
}

var knightProbability = function(n, k, row, column) {
  function recursive(n, k, row, column) {
    if (!isOnBoard(n, row, column)) return 0;
    if (k === 0 && isOnBoard(n, row, column)) return 1;
    
    let sum = 0;
    for (let d in direction) {
      const [r, c] = d;
      sum += recursive(n, k-1, row + r, column + c);
    }
    return sum / 8;
  }
  return recursive(n, k, row, column)
};

console.log(knightProbability(3,2,0,0))