
var GFX_BASE = '/static/res/gfx/';

var keyMirror = require('keymirror');

var ColorSetData = {
  GOLD_SILVER: {
    name: 'Gold/Silver',
    path: '40x40-gs/',
    ext:  '.svg'
  },
  WHITE_BLACK: {
    name: 'White/Black',
    path: '40x40-bw/',
    ext: '.svg'
  },
};

var ColorSets = keyMirror(ColorSetData);

var AnimalData = {
  E: {
    name: 'Elephant',
    code: 'e',
    path: '1-elephant',
  },
  M: {
    name: 'Camel',
    code: 'm',
    path: '2-camel',
  },
  H: {
    name: 'Horse',
    code: 'h',
    path: '3-horse',
  },
  D: {
    name: 'Dog',
    code: 'd',
    path: '4-dog',
  },
  C: {
    name: 'Cat',
    code: 'c',
    path: '5-cat',
  },
  R: {
    name: 'Rabbit',
    code: 'r',
    path: '6-rabbit',
  }
};

var Animals = keyMirror(AnimalData);

var PlayerData = {
  ONE: {
    path: '1-',
  },
  TWO: {
    path: '2-',
  }
};

var Players = keyMirror(PlayerData)

var ActionTypes = keyMirror({
  SET_COLORSET: null,
});

module.exports = {

    GFX_BASE: GFX_BASE,

    ActionTypes: ActionTypes,
    AnimalData: AnimalData,
    Animals: Animals,
    ColorSets: ColorSets,
    ColorSetData: ColorSetData,
    PlayerData: PlayerData,
    Players: Players,

};


