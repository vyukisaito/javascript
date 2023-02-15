const board = document.querySelector('#board');
let currentPlayer = 'X';

board.addEventListener('click', function (event) {
  let cell = event.target;
  if (cell.tagName === 'TD' && !cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' ganhou!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
});

function checkWin() {
  let cells = board.getElementsByTagName('td');
  let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < combinations.length; i++) {
    let [a, b, c] = combinations[i];
    if (cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}
