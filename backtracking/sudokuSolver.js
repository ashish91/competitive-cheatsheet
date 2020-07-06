function isValid(board, num, i, j, S, N) {
  if (board[i][j] != '.') {
    return false;
  }

  for (let x = 0; x < N; x++) {
    if (board[x][j] == num) {
      return false;
    }
  }

  for (let y = 0; y < N; y++) {
    if (board[i][y] == num) {
      return false;
    }
  }

  let x = i - i%S, y = j - j%S;
  for (let x = i - i%S; x < i + S - i%S; x++) {
    for (let y = j - j%S; y < j + S - j%S; y++) {
      if (board[x][y] == num) {
        return false;
      }
    }
  }


  return true;
}

function backtrack(board, i, j, S, N) {
  let right, down;
  for (let n = 1; n <= 9; n++) {
    if (isValid(board, n, i, j, S, N)) {
      board[i][j] = n;

      if (j < N) {
        // Go right
        backtrack(board, i, j + 1, S, N);
      } else if (i < N) {
        // Move towards the next row starting
        backtrack(board, i + 1, 0, S, N);
      } else {
        return true
      }

      board[i][j] = '.';
    }
  }
}

function sudokuSolve(board) {
  // your code goes here
  return backtrack(board, 0, 0, 3, 9);
}