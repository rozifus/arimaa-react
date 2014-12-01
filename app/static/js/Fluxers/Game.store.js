

var GameDispatcher = require('./Game.dispatcher');
var GameConstants = require('./Game.constants');
var ThemeConstants = require('./Theme.constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var BoardData = require('./Board.data')

var ColorSets = GameConstants.ColorSets;
var ColorSetData = GameConstants.ColorSetData;
var ActionTypes = GameConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _board = null;
var _turns = [];
var _turn = [];

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
    return (_board && _board[row] && _board[row][column]) || null;
  },

  getPieceTypeData: function(pieceType) {
    return ThemeConstants.pieceTypeData[pieceType];
  },

});

GameStore.DespatchToken = GameDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.NEW_GAME:
      _board = BoardData.getDefaultLayout();
      GameStore.emitChange();
      break;
  }

});

module.exports = GameStore;


