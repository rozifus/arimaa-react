

var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var ThemeDispatcher = require('../dispatcher/Theme.dispatcher');
var ThemeConstants  = require('../constants/Theme.constants');

var AnimalConstants = require('../constants/Animal.constants');

var ColorSets    = ThemeConstants.ColorSets;
var ColorSetData = ThemeConstants.ColorSetData;
var ActionTypes  = ThemeConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _colorSet = ColorSets.GOLD_SILVER;

var ThemeStore = assign({}, EventEmitter.prototype, {

  emitChange: function(callback) {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getColorSet: function() {
    return _colorSet;
  },

  getColorSetList: function() {
    return Object.keys(ColorSets).map(function(cs) {
      return {
        key: cs,
        text: ColorSetData[cs].name,
      };
    });
  },

  getPieceImgSrc: function(pieceCode) {

    var pieceTypeData = ThemeConstants.PieceTypeData[pieceCode],
        player        = pieceTypeData.player,
        animal        = pieceTypeData.animal;

    return ThemeConstants.GFX_BASE +
           ThemeConstants.ColorSetData[_colorSet].path +
           ThemeConstants.PlayerData[player].path +
           AnimalConstants.Data[animal].path +
           ThemeConstants.ColorSetData[_colorSet].ext;

  },


});

ThemeStore.DespatchToken = ThemeDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.SET_COLORSET:
      _colorSet = action.colorSet;
      ThemeStore.emitChange();
      break;
  }

});

ThemeStore.setMaxListeners(48);

module.exports = ThemeStore;


