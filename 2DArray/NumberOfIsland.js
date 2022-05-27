const directions = [
  [0,0], [-1,0], [0,1], [1,0],[0,-1]
]

function isWithinBoundary(mtrx, row, col) {
  return row >= 0 && row < mtrx.length && col >= 0 && col < mtrx[0].length;
}

function markIsland(mtrx, row, col) {
  const queue = [[row, col]];

  while (queue.length > 0) {
    [row, col] = queue.pop();
    for (let i = 0; i < directions.length; i++) {
      let [r, c] = directions[i];
      if (isWithinBoundary(mtrx, row + r, col + c)
      && mtrx[row + r][col + c] === 1) {
        mtrx[row + r][col + c] = 0;
        i > 0 && queue.unshift([row + r, col + c]);
      }
    }
  }
  return mtrx;
}

function countIsland(mtrx, row=0, col=0) {
  let i = row;
  let cnt = 0;

  while(i < mtrx.length) {
    for (let j = row === i? col : 0; j < mtrx[0].length; j++) {
      if (mtrx[i][j] === 1) {
        mtrx = markIsland(mtrx, i, j);
        cnt++;
      }
    }
    i++;
  }

  return cnt;
}

console.log(countIsland(
  [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ]
))

console.log(countIsland(
  [[],[]]
))