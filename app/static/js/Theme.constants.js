
var GFX_BASE = "/static/res/gfx/";

var keyMirror = require('keymirror');

var ColorSetNames = {
  GOLD_SILVER: "Gold/Silver",
  WHITE_BLACK: "White/Black",
};

var AnimalPaths = {
  E: "1-elephant",
  M: "2-camel",
  H: "3-horse",
  D: "4-dog",
  C: "5-cat",
  R: "6-rabbit",

  e: "1-elephant",
  m: "2-camel",
  h: "3-horse",
  d: "4-dog",
  c: "5-cat",
  r: "6-rabbit",
};

var Players = keyMirror({
  ONE: null,
  TWO: null
});

var PlayerPaths = {
  ONE: "1-",
  TWO: "2-"
};

var ColorSets = keyMirror(ColorSetNames);

var ColorSetPaths = {
  GOLD_SILVER: "40x40-gs/",
  WHITE_BLACK: "40x40-bw/",
};

var ColorSetExts = {
  GOLD_SILVER: ".svg",
  WHITE_BLACK: ".svg"
};

var ActionTypes = keyMirror({
  SET_COLORSET: null,
});

module.exports = {

    GFX_BASE: GFX_BASE,

    ActionTypes: ActionTypes,
    AnimalPaths: AnimalPaths,
    ColorSets: ColorSets,
    ColorSetExts: ColorSetExts,
    ColorSetNames: ColorSetNames,
    ColorSetPaths: ColorSetPaths,
    PlayerPaths: PlayerPaths,

};


