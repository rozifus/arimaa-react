

var GameDispatcher = require('../dispatcher/Game.dispatcher');
var GameConstants  = require('../constants/Game.constants');
var GameStore      = require('../stores/Game.store');

var ActionTypes = GameConstants.ActionTypes;

module.exports = {

  newGame: function() {
    GameDispatcher.handleViewAction({
      type: ActionTypes.NEW_GAME,
    });
  }

};

