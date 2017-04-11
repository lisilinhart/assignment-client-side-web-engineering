import io  from 'socket.io-client';
import Chess from 'chess.js'
import ChessBoard from 'chessboardjs'
import config from './config'

const conf = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};

const board = ChessBoard('chess-board', conf);
const game = new Chess.Chess();
const statusEl = $('#status');
const fenEl = $('#fen');
const pgnEl = $('#pgn');
const socket = io(config.SERVER_URL);
socket.emit('join game', { game: "1bcrpd3p" });

function initGame( game, socket) {
  console.log(socket, game);
  socket.emit('join game', { game: "1bcrpd3p" });
  board.position(game.fen);
}

function update(moveSan) {
  const move = game.move(moveSan);
  board.position(game.fen());

  if (move === null) {
    return 'snapback';
  } else {
    // socket.emit('move', { move: move.san });
  }
}

function onDragStart(source, piece, position, orientation) {
  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

function onDrop(source, target, piece, position) {
  const move = game.move({
    from: source,
    to: target,
    piece,
    position
  });
  board.position(game.fen());

  if (move === null) return 'snapback';

  socket.emit('move', { move: move.san });
  updateStatus();
};

function onSnapEnd() {
  board.position(game.fen());
};


function updateStatus(data) {
  let status = '';
  let moveColor = 'White';
  if (game.turn() === 'b') {
    moveColor = 'Black';
  }
  if (game.in_checkmate() === true) {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
  }
  else if (game.in_draw() === true) {
    status = 'Game over, drawn position';
  }
  else {
    status = moveColor + ' to move';

    if (game.in_check() === true) {
      status += ', ' + moveColor + ' is in check';
    }
  }
  statusEl.html(status);
  fenEl.html(game.fen());
  pgnEl.html(game.pgn());
};



// add socket listeneres
socket.on('game joined', function(data) {
  console.log('game joined', data);
  initGame(data.game);
});

socket.on('move', function(data) {
  console.log('move', data);
  update(data.move);
});

