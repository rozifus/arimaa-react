

var ThemeDispatcher = require('./Theme.dispatcher');
var ThemeConstants = require('./Theme.constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ColorSets = ThemeConstants.ColorSets;
var ColorSetData = ThemeConstants.ColorSetData;
var ActionTypes = ThemeConstants.ActionTypes;
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

  getPieceImgSrc: function(player, animal) {
    console.log

    return ThemeConstants.GFX_BASE +
           ThemeConstants.ColorSetData[_colorSet].path +
           ThemeConstants.PlayerData[player].path +
           ThemeConstants.AnimalData[animal].path +
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

module.exports = ThemeStore;


