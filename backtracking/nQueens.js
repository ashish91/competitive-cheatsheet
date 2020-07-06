const isValidPosition = function(board, r, c) {
  // Check two queens in same column
  for (let i = 0; i < c; i++) {
    if (board[r][i] == 'Q') {
      return false;
    }
  }
  // Check two queens in same \ diagonal
  let i = r, j = c;
  while (i >= 0 && j >= 0) {
    if (board[i][j] == 'Q') {
      return false;
    }
    i -= 1;
    j -= 1;
  }

  // Check two queens in same / diagonal
  let i = r, j = c;
  while (i >= 0 && j < N) {
    if (board[i][j] == 'Q') {
      return false;
    }
    i -= 1;
    j += 1;
  }
  return true;
}

const nQueen = function (board, r, N) {
  if (r == N) {
    for (let i = 0 in board) {
      for (let j = 0 in board[0]) {
        console.log(board[i][j]);
      }
      console.log('\n');
    }
  }

  for (let c = 0; c < N; c++) {
    if (isValidPosition(board, r, c)) {
      board[r][c] = 'Q';
      nQueen(board, r + 1, N);
      board[r][c] = '-';
    }
  }
}

const N = 8;
const board = Array(N).map((e) => Array(N).fill('-'));

nQueen(board, 0, N);