
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
var NULL_PIECE = ThemeConstants.NULL_PIECE;

var _board = null;

var Decode = function(turn) {
  var moveCode = turn.turn.trim();

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

  switch (moveObj.movement) {
    case Movements.e:
      _board[row][column+1] = _board[row][column];
      _board[row][column] = NULL_PIECE;
      break;
    case Movements.w:
      _board[row][column-1] = _board[row][column];
      _board[row][column] = NULL_PIECE;
      break;
    case Movements.n:
      _board[row-1][column] = _board[row][column];
      _board[row][column] = NULL_PIECE;
      break;
    case Movements.s:
      _board[row+1][column] = _board[row][column];
      _board[row][column] = NULL_PIECE;
      break;
    case Movements.x:
      _board[row][column] = NULL_PIECE;
      break;
  }

}

var ValidMoves = function(row, column) {
    if ( (_board == null) || (_board[row][column] == NULL_PIECE) ) {
      return [];
    };
    var valid = [];
    if ( (row > 0) && (_board[row-1][column] == NULL_PIECE) ) {
        valid.push({ movement: Movements.n, row: row-1, column: column })
    };
    if ( (row < 7) && (_board[row+1][column] == NULL_PIECE) ) {
        valid.push({ movement: Movements.s, row: row+1, column: column })
    };
    if ( (column > 0) && (_board[row][column-1] == NULL_PIECE) ) {
        valid.push({ movement: Movements.w, row: row, column: column-1 })
    };
    if ( (column < 7) && (_board[row][column+1] == NULL_PIECE) ) {
        valid.push({ movement: Movements.e, row: row, column: column+1 })
    };
    return valid;
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
  },

  getValidMoves: function(row, column) {
    return ValidMoves(row, column)
  }

};

module.exports = LocalEngine;
