const body = document.getElementsByTagName('body')[0];
const root = document.createElement('div');
root.id = 'root';
body.appendChild(root);

const info = document.createElement('div');
info.classList.add('info');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
root.append(info, wrapper);
(function (nClass, n) {
  let i = 0;
  while (i < n) {
    const div = document.createElement('div');
    div.classList.add(nClass);
    wrapper.appendChild(div);
    i++;
  }
})('square', 9);

const data = {
  player: 'X',
  winner: '',
  counter: 0
}

function makeCounter() {
  return data.player === 'X' ? data.player = '0' : data.player = 'X';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner;
  lines.forEach(el => {
    const [a, b, c] = el;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
      return;
    }
  })
  return winner;
}

const getSquares = () => Array.from(document.querySelectorAll('.square')).map(el => el.innerHTML);

getInfo = (player, winner, counter) => {
  if (!winner) info.innerHTML = `Ходит ${player}`;
  if (winner) info.innerHTML = `Победил ${winner}`;
  if (!winner && counter === 8) info.innerHTML = `Ничья`;
}
getInfo(data.player, data.winner);

const handleClick = e => {
  if (!data.winner) {
    if (!e.target.innerHTML) {
      e.target.innerHTML = data.player;
      const squares = getSquares();
      data.winner = calculateWinner(squares);
      makeCounter();
      getInfo(data.player, data.winner, data.counter);
    }
  }
  data.counter++;
}

wrapper.addEventListener('click', handleClick);

const clearSquares = () => {
  document.querySelectorAll('.square').forEach(el => el.innerHTML = '');
  data.player = data.winner || 'X';
  data.winner = '';
  data.counter = 0;
  getInfo(data.player, data.winner);
}

const bth = document.createElement('button');
bth.innerHTML = 'Clear';
bth.onclick = () => clearSquares();

root.appendChild(bth);
