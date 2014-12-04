

var assign         = require('object-assign');
var EventEmitter   = require('events').EventEmitter;
var GameDispatcher = require('../dispatcher/Game.dispatcher');
var GameConstants  = require('../constants/Game.constants');

var LocalEngine    = require('../engine/Local.engine');

var ActionTypes    = GameConstants.ActionTypes;
var CHANGE_EVENT   = 'change';

var BoardData      = require('../data/Board.data');

var _engine = null;
var _board = [];

var GameStore = assign({}, EventEmitter.prototype, {

  emitChange: function(callback) {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getTurns: function() {
    return _turns;
  },

  getPieceAt: function(row, column) {
    return (_board && _board[row] && _board[row][column]) || " ";
  },

  getPieceTypeData: function(pieceType) {
    return ThemeConstants.pieceTypeData[pieceType];
  },


});

GameStore.DespatchToken = GameDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_BOARD:
      GameStore.emitChange();
      break;

    case ActionTypes.NEW_GAME:
      _engine = LocalEngine;
      _engine.newGame();
      _board = _engine.getBoard();
      GameStore.emitChange();
      break;

    case ActionTypes.MAKE_TURN:
      var turn = action.turn;
      _engine && _engine.processTurn(turn);
      break;
  };

});

module.exports = GameStore;


