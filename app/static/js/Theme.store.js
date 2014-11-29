

var ThemeDispatcher = require('./Theme.dispatcher');
var ThemeConstants = require('./Theme.constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ColorSets = ThemeConstants.ColorSets;
var ColorSetNames = ThemeConstants.ColorSetNames;
var ActionTypes = ThemeConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _colorSet = ColorSets.GOLD_SILVER;

var ThemeStore = assign({}, EventEmitter.prototype, {

  emitChange: function(callback) {
    this.emit(CHANGE_EVENT)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getColorSetList: function() {
    return Object.keys(ColorSets).map(function(cs) {
      return {
        key: cs,
        text: ColorSetNames[cs],
      };
    });
  },

  getCurrentColorSet: function() {
    return _colorSet;
  }

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

