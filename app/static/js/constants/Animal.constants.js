
var keyMirror = require('keymirror');
var constantData = require('../util/constantData')

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

var AnimalKeys = keyMirror(AnimalData);

var Animals = constantData(AnimalKeys, AnimalData);

module.exports = Animals;


