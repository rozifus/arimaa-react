

var ThemeDispatcher = require('../dispatcher/Theme.dispatcher');
var ThemeConstants  = require('../constants/Theme.constants');
var ThemeStore      = require('../stores/Theme.store');

var ActionTypes = ThemeConstants.ActionTypes;

module.exports = {

  setColorSet: function(colorSet) {
    ThemeDispatcher.handleViewAction({
      type: ActionTypes.SET_COLORSET,
      colorSet: colorSet,
    });
  }

};

