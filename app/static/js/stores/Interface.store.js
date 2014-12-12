

var assign         = require('object-assign');
var EventEmitter   = require('events').EventEmitter;
var InterfaceDispatcher = require('../dispatcher/Interface.dispatcher');
var InterfaceConstants  = require('../constants/Interface.constants');
var BoardConstants  = require('../constants/Board.constants');

var LocalEngine    = require('../engine/Local.engine');

var GameStore      = require('../stores/Game.store')

var ActionTypes    = InterfaceConstants.ActionTypes;
var CHANGE_EVENT   = 'change';

var BoardData      = require('../data/Board.data');

var Movement       = BoardConstants.Movement;

var Arrows         = InterfaceConstants.Arrows;
var ArrowData      = InterfaceConstants.ArrowData;

var ARROW_BASE     = InterfaceConstants.ARROW_BASE;
var ARROW_EXT      = InterfaceConstants.ARROW_EXT;


var _selected = null;
var _arrows = [];

var InterfaceStore = assign({}, EventEmitter.prototype, {

  emitChange: function(callback) {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getOverlayImgAt: function(row, column) {
    var img = "";
    _arrows.map(function(item){
        if (item.row == row && item.column == column) {
          img = ARROW_BASE + ArrowData[item.arrow].path + ARROW_EXT;
        }
    });
    return img;
  }

});

InterfaceStore.DespatchToken = InterfaceDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.MOUSE_ENTER_SQUARE:
      _arrows = [];
      _selected = {row: action.row, column: action.column}
      var validMoves = GameStore.getValidMoves(action.row, action.column)
      validMoves.map(function(move){
        Object.keys(ArrowData).forEach(function(key) {
          if (ArrowData[key].movement == move.movement) {
            _arrows.push({arrow: key, row: move.row, column: move.column});
          }
        })
      });
      InterfaceStore.emitChange();
      break;

  };

});

module.exports = InterfaceStore;


