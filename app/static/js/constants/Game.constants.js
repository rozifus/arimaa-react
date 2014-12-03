

var keyMirror = require('keymirror');

var ActionTypes = keyMirror({

  NEW_GAME: null,
  GAME_CREATED: null,

  MAKE_STEP: null,
  UNDO_STEP: null,
  END_TURN: null,

});

module.exports = {

    ActionTypes: ActionTypes,

};


