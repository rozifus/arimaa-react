

var keyMirror = require('keymirror');

var ActionTypes = keyMirror({

  NEW_GAME: null,
  GAME_CREATED: null,

  RECEIVE_BOARD: null,
  RECEIVE_MOVE: null,
  RECEIVE_END_TURN: null,
  RECEIVE_TURN: null,

  SEND_TURN: null,

  MAKE_STEP: null,
  UNDO_STEP: null,
  END_TURN: null,

});


var GameState = keyMirror({
  NONE: null,
  SETUP: null,
  MAIN: null,
});

module.exports = {

    ActionTypes: ActionTypes,
    GameState: GameState,

};


