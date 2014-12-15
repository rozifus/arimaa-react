

var InterfaceDispatcher = require('../dispatcher/Interface.dispatcher');
var InterfaceConstants  = require('../constants/Interface.constants');

var ActionTypes    = InterfaceConstants.ActionTypes;

module.exports = {

  mouseEnterSquare: function(row, column) {
    InterfaceDispatcher.handleViewAction({
      type: ActionTypes.MOUSE_ENTER_SQUARE,
      row: row,
      column: column,
    });
  },

  mouseClickSquare: function(row, column) {
    InterfaceDispatcher.handleViewAction({
      type: ActionTypes.MOUSE_CLICK_SQUARE,
      row: row,
      column: column,
    });
  },

};

