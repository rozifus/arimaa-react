
var Movements = require('../constants/Board.constants').Movements

var ARROW_BASE = '/static/res/gfx/arrows/';
var ARROW_EXT = '.svg';

var keyMirror = require('keymirror');

var ActionTypes = keyMirror({

  MOUSE_ENTER_SQUARE: null,
  MOUSE_CLICK_SQUARE: null,

});

var ArrowColorData = {
  BLUE: {
    path: "blue/"
  },
  GREY: {
    path: "grey/"
  }
}

var ArrowColors = keyMirror(ArrowColorData);

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

var getArrowForMovement = function(movement) {
  arrow = null;
  Object.keys(ArrowData).forEach(function(key) {
    if (ArrowData[key].movement == movement) {
      arrow = key;
    };
  })
  return arrow;
}

module.exports = {

    ActionTypes: ActionTypes,
    Arrows: Arrows,
    ArrowData: ArrowData,
    ArrowColorData: ArrowColorData,
    ArrowColors: ArrowColors,
    getArrowForMovement: getArrowForMovement,
    ARROW_BASE: ARROW_BASE,
    ARROW_EXT: ARROW_EXT,

};


