

var assign         = require('object-assign');
var EventEmitter   = require('events').EventEmitter;
var GameDispatcher = require('../dispatcher/Game.dispatcher');
var GameConstants  = require('../constants/Game.constants');
var BoardConstants = require('../constants/Board.constants');

var LocalEngine    = require('../engine/Local.engine');

var ActionTypes    = GameConstants.ActionTypes;
var CHANGE_EVENT   = 'change';

var BoardData      = require('../data/Board.data');

var Movement       = BoardConstants.Movement;

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

  getPieceAt: function(row, column) {
    var board = _engine && _engine.getBoard()
    return (board && board[row] && board[row][column]) || " ";
  },

  getPieceTypeData: function(pieceType) {
    return ThemeConstants.pieceTypeData[pieceType];
  },

  getValidMoves: function(row, column) {
    return _engine && _engine.getValidMoves(row, column) || [];
  },

  receiveTurn: function(row, column, direction) {
    _engine.processPure(row, column, direction)
    console.log("pure")
    GameStore.emitChange();
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
      GameStore.emitChange();
      break;

    case ActionTypes.MAKE_TURN:
      var turn = action.turn;
      _engine.processTurn(turn);
      GameStore.emitChange();
      break;
  };

});

module.exports = GameStore;


