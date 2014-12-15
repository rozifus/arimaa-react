

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

var Movements      = BoardConstants.Movements;

var Arrows         = InterfaceConstants.Arrows;
var ArrowData      = InterfaceConstants.ArrowData;

var ArrowColorData = InterfaceConstants.ArrowColorData;
var ArrowColors    = InterfaceConstants.ArrowColors;

var getArrowForMovement = InterfaceConstants.getArrowForMovement;

var ARROW_BASE     = InterfaceConstants.ARROW_BASE;
var ARROW_EXT      = InterfaceConstants.ARROW_EXT;


var _origin = null;
var _destination = null;
var _moves = [];

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
    if (_destination != null) {
      var arrow = getArrowForMovement(_destination.movement);
      if (row == _destination.row && column == _destination.column) {
        img = ARROW_BASE + ArrowColorData[ArrowColors.BLUE].path +
              ArrowData[arrow].path + ARROW_EXT;
      }
    } else {
      _moves.map(function(item){
        if (item.row == row && item.column == column) {
          var arrow = getArrowForMovement(item.movement);
          img = ARROW_BASE + ArrowColorData[ArrowColors.GREY].path +
                ArrowData[arrow].path + ARROW_EXT;
        }
      });
    };
    return img;
  },

  setSquareToOrigin: function(row, column) {
    _moves = [];
    _origin = {row: row, column: column}
    _destination = null;
    var validMoves = GameStore.getValidMoves(row, column)
    validMoves.map(function(vm){
      Object.keys(Movements).forEach(function(key) {
        if (Movements[key] == vm.movement) {
          _moves.push({movement: key, row: vm.row, column: vm.column});
        }
      })
    });
  },

  setSquareToDestination: function(row, column) {
    _moves.map(function(move) {
        if (move.row == row && move.column == column) {
          _destination = move;
        }
    });
  },

  onMouseEnterSquare: function(row, column) {
    var t = this;
    var didDestination = false;
    _moves.map(function(move) {
      if (move.row == row && move.column == column) {
        t.setSquareToDestination(row, column);
        didDestination = true;
      }
    });
    if (!didDestination) {
        t.setSquareToOrigin(row, column);
    }
  },

  onMouseClickSquare: function(row, column) {
    if (_destination &&
        _destination.row == row &&
        _destination.column == column) {
      var turn = {
        movement: _destination.movement,
        row: _origin.row,
        column: _origin.column,
      };
      GameStore.receiveTurn(turn);
    }
  }

});

InterfaceStore.DespatchToken = InterfaceDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.MOUSE_ENTER_SQUARE:
      InterfaceStore.onMouseEnterSquare(action.row, action.column);
      InterfaceStore.emitChange();
      break;

    case ActionTypes.MOUSE_CLICK_SQUARE:
      InterfaceStore.onMouseClickSquare(action.row, action.column);
      InterfaceStore.emitChange();
  };

});

module.exports = InterfaceStore;


