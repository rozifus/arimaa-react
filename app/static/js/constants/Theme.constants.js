
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
  ELEPHANT: {
    name: 'Elephant',
    code: 'e',
    path: '1-elephant',
  },
  CAMEL: {
    name: 'Camel',
    code: 'm',
    path: '2-camel',
  },
  HORSE: {
    name: 'Horse',
    code: 'h',
    path: '3-horse',
  },
  DOG: {
    name: 'Dog',
    code: 'd',
    path: '4-dog',
  },
  CAT: {
    name: 'Cat',
    code: 'c',
    path: '5-cat',
  },
  RABBIT: {
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

PieceTypeData = {};

Object.keys(Animals).map(function(animal) {
  PieceTypeData[AnimalData[animal].code.toUpperCase()] = {
    animal: animal,
    player: Players.ONE
  };
  PieceTypeData[AnimalData[animal].code.toLowerCase()] = {
    animal: animal,
    player: Players.TWO
  };
});

var PieceTypes = keyMirror(PieceTypeData);

var NULL_PIECE = " ";

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
    PieceTypeData: PieceTypeData,
    PieceTypes: PieceTypes,
    NULL_PIECE: NULL_PIECE,

};


