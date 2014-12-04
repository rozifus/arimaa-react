
var assign         = require('object-assign');
var keyMirror      = require('keymirror');
var GameConstants  = require('../constants/Game.constants');
var ThemeConstants = require('../constants/Theme.constants');
var GameDispatcher = require('../dispatcher/Game.dispatcher');


var BoardData  = require('../data/Board.data');

var GameState = GameConstants.GameState;
var ActionTypes = GameConstants.ActionTypes;
var GameActions    = require('../actions/Game.actions');

var _board = null;

var LocalEngine = {

  newGame: function() {
    _board = BoardData.DefaultLayout;
  },

  getBoard: function() {
    return _board
  },

  processTurn: function(turn) {
    console.log('process: ', turn)
  },

};

module.exports = LocalEngine;
