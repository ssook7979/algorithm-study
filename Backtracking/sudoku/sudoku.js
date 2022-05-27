// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
// https://leetcode.com/problems/sudoku-solver/

// contents of lesson
// Step 1. verify the constraints
// What happens if the board cannot be solved?
// > Leave the sudoku puzzle as is.

// Step2. Write out some test cases

/**
 * Backtracking Template
 * inside recursive function,
 * 1. add
 * 2. decide
 * 3. if valid call recursive func
 * 4. remove
 */



function getBoxId(row, col) {
  return Math.floor(row / 3) + Math.floor(col / 3) * 3
}

function sudokuSolver(sudoku) {
  const N = sudoku[0].length;
  const EMPTY_STR = '.';
  const rows = new Array(N).fill(EMPTY_STR).map(() => {});
  const cols = new Array(N).fill(EMPTY_STR).map(() => {});
  const boxes = new Array(N).fill(EMPTY_STR).map(() => {});

  recursive(0, 0, 0);

  function isValid(r, c, value) {
    return (r >= 0 && r < N && c >= 0 && c < N)
      && (!rows[r][value] && !cols[c][value] && !boxes[getBoxId(r, c)][value])
  }

  function recursive(r, c, value) {
    if (value >= N || r >= N || c >= N) {
      return;
    }

    if (sudoku[r][c] === EMPTY_STR) {
      sudoku[r][c] = value;
    }
    if (isValid(r, c, value)) {
      rows[r][value] = true;
      cols[c][value] = true;
      boxes[getBoxId(r, c)][value] = true;

      value = value === (N - 1)? 0 : (value + 1);
      if (c === N - 1) {
        c = 0, r += 1;
      } else {
        c += 1;
      }
    } else {
      sudoku[r][c] = EMPTY_STR;
      value = value === 0? N - 1 : (value - 1);
    }
    recursive(r, c, value);
  }

  return sudoku;

}