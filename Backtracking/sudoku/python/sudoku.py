def solutions(board):
    def get_box_id(row, col):
        return (row // 3) * 3 + (col // 3)

    def is_safe(row, col, val):
        return not (val in rows[row] or val in cols[col] or val in boxes[get_box_id(row, col)])

    def solve(row, col):
        if row == len(board) or col == len(board):
            return True
        if board[row][col] == '.':
            for i in range(1, 10):
                if is_safe(row, col, i):
                    board[row][col] = str(i)
                    rows[row].add(i)
                    cols[col].add(i)
                    boxes[get_box_id(row, col)].add(i)
                    if col == len(board) - 1:
                        if solve(row + 1, 0):
                            return True
                    else:
                        if solve(row, col + 1):
                            return True
                    board[row][col] = '.'
                    rows[row].remove(i)
                    cols[col].remove(i)
                    boxes[get_box_id(row, col)].remove(i)
        else:
            if col == len(board) - 1:
                if solve(row + 1, 0):
                    return True
            else:
                if solve(row, col + 1):
                    return True
        return False

    rows = [set() for _ in range(len(board))]
    cols = [set() for _ in range(len(board))]
    boxes = [set() for _ in range(len(board))]

    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] != '.':
                rows[i].add(int(board[i][j]))
                cols[j].add(int(board[i][j]))
                boxes[get_box_id(i, j)].add(int(board[i][j]))

    solve(0,0)
    return board

board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
print(solutions(board))

        