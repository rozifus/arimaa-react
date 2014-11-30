

var ThemeDispatcher = require('./Theme.dispatcher');
var ThemeConstants = require('./Theme.constants');
var ThemeStore = require('./Theme.store');

var ActionTypes = ThemeConstants.ActionTypes;

module.exports = {

  setColorSet: function(colorSet) {
    ThemeDispatcher.handleViewAction({
      type: ActionTypes.SET_COLORSET,
      colorSet: colorSet,
    });
  }

};

