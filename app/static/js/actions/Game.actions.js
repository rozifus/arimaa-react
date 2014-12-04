

var GameDispatcher = require('../dispatcher/Game.dispatcher');
var GameConstants  = require('../constants/Game.constants');

var ActionTypes    = GameConstants.ActionTypes;

module.exports = {

  requestNewGame: function() {
    console.log('run')
    GameDispatcher.handleViewAction({
      type: ActionTypes.NEW_GAME,
    });
  },

  receiveTurn: function() {
    GameDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_END_TURN,
    });
  },

  receiveNewGame: function(board) {
    GameDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_NEW_GAME,
    });
  },

  receiveBoard: function(board) {
    console.log('board received', board);
    GameDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_BOARD,
      board: board,
    });
  },

  sendTurn: function(turn) {
    GameDispatcher.handleViewAction({
      type: ActionTypes.MAKE_TURN,
      turn: turn,
    });
  }

};

