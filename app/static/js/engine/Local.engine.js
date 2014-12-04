
var assign         = require('object-assign');
var keyMirror      = require('keymirror');
var GameConstants  = require('../constants/Game.constants');
var BoardConstants  = require('../constants/Board.constants');
var ThemeConstants = require('../constants/Theme.constants');
var GameDispatcher = require('../dispatcher/Game.dispatcher');


var BoardData  = require('../data/Board.data');

var GameState = GameConstants.GameState;
var ActionTypes = GameConstants.ActionTypes;
var GameActions    = require('../actions/Game.actions');

var Movements = BoardConstants.Movements;
var PieceTypes = ThemeConstants.PieceTypes;

var _board = null;

var Decode = function(turn) {
  console.log('decode:', turn.turn)
  var moveCode = turn.turn.trim();
  console.log("move", moveCode.charAt(1));
  console.log(BoardConstants.RowInt)

  return {
    pieceCode: moveCode.charAt(0),
    column: BoardConstants.RowInt[moveCode.charAt(1)],
    row: parseInt(moveCode.charAt(2))-1,
    movement: moveCode.charAt(3),
  }
}

var Move = function(moveObj) {

  var row    = moveObj.row,
      column = moveObj.column;

  console.log(moveObj)

  switch (moveObj.movement) {
    case Movements.e:
      _board[row][column+1] = _board[row][column];
      _board[row][column] = " ";
      break;
    case Movements.w:
      _board[row][column-1] = _board[row][column];
      _board[row][column] = " ";
      break;
    case Movements.n:
      _board[row-1][column] = _board[row][column];
      _board[row][column] = " ";
      break;
    case Movements.s:
      _board[row+1][column] = _board[row][column];
      _board[row][column] = " ";
      break;
    case Movements.x:
      _board[row][column] = " ";
      break;
  }

}

var LocalEngine = {

  newGame: function() {
    _board = BoardData.DefaultLayout;
  },

  getBoard: function() {
    return _board;
  },

  processTurn: function(turnCode) {
    // doing moves instead for the moment
    Move(Decode(turnCode))
    return _board;
  },

};

module.exports = LocalEngine;
