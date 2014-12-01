

var GameDispatcher = require('./Game.dispatcher');
var GameConstants = require('./Game.constants');
var GameStore = require('./Game.store');

var ActionTypes = GameConstants.ActionTypes;

module.exports = {

  newGame: function() {
    GameDispatcher.handleViewAction({
      type: ActionTypes.NEW_GAME,
    });
  }

};

