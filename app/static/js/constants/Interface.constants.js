
var Movements = require('../constants/Board.constants').Movements

var ARROW_BASE = '/static/res/gfx/arrows/blue/';
var ARROW_EXT = '.svg';

var keyMirror = require('keymirror');

var ActionTypes = keyMirror({

  MOUSE_ENTER_SQUARE: null,

});

var ArrowData = {
  LEFT: {
    path: "left",
    movement: Movements.w
  },
  UP: {
    path: "up",
    movement: Movements.n
  },
  RIGHT: {
    path: "right",
    movement: Movements.e
  },
  DOWN: {
    path: "down",
    movement: Movements.s
  }
};

var Arrows = keyMirror(ArrowData);

module.exports = {

    ActionTypes: ActionTypes,
    Arrows: Arrows,
    ArrowData: ArrowData,
    ARROW_BASE: ARROW_BASE,
    ARROW_EXT: ARROW_EXT,

};


