const directions = [
  [1,0], [0,1], [-1,0], [0,-1]
]

function isWithinBoundary(mtrx, row, col) {
  return row >= 0 && row < mtrx.length && col >= 0 && col < mtrx[0].length;
}

function rotDuringUnitTime(mtrx, queue, row, col) {
  let r,c, cnt = 0;

  for (let i = 0; i < directions.length; i++) {
    [r, c] = directions[i];
    row += r;
    col += c
    
    if (isWithinBoundary(mtrx, row, col) && mtrx[row][col] === 1) {
      queue.unshift([row, col]);
      mtrx[row][col] = 2;
      cnt++;
    }
  }

  return cnt;
}

function rottingOranges(mtrx) {
  let i = 0;
  let t = 0;
  let row, col, cnt = 0, initFreshOrangesCnt = 0;
  const queue = [];

  while (i < mtrx.length) {
    for (let j = 0; j < mtrx[0].length; j++) {
      if (mtrx[i][j] === 2) {
        queue.unshift([i, j]);
      } else if (mtrx[i][j] === 1) {
        initFreshOrangesCnt++;
      }
    }
    i++;
  }

  if (initFreshOrangesCnt > 0) {
    cnt = queue.length;
    
    while (queue.length > 0) {
      [row, col] = queue.pop();
      initFreshOrangesCnt -= rotDuringUnitTime(mtrx, queue, row, col);
      cnt--;
  
      if (cnt === 0) {
        cnt = queue.length;
        t++;
      }
    }
  }
  return initFreshOrangesCnt > 0 ? -1 : t;
}