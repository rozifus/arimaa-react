
var keyMirror = require('keymirror');

var ColorSetNames = {
  GOLD_SILVER: "Gold/Silver",
  WHITE_BLACK: "White/Black",
};

var ColorSets = keyMirror(ColorSetNames);

var ActionTypes = keyMirror({
  SET_COLORSET: null,
});

module.exports = {
    ColorSets: ColorSets,
    ColorSetNames: ColorSetNames,
    ActionTypes: ActionTypes
}


