
var React = require('react');
var Dropdown = require('./Dropdown.react');
var TextInput = require('./TextInput.react');
var Button = require('./Button.react');
var ThemeStore = require('../stores/Theme.store');
var ThemeActions = require('../actions/Theme.actions');
var GameActions = require('../actions/Game.actions');

var Component = React.createClass({

  getInitialState: function() {
    return {
      inputTurn: "",
    }
  },

  onChangeColorSet: function(event, value) {
    ThemeActions.setColorSet(event)
  },

  onChangeInputTurn: function(event, value) {
    this.setState({inputTurn: value})
  },

  onClickSubmitTurn: function(event, value) {
    GameActions.sendTurn({turn: this.state.inputTurn})
    this.setState({inputTurn: ""})
  },

  render: function() {

    var colorSetList = ThemeStore.getColorSetList();
    var colorSet = ThemeStore.getColorSet();

    return(
      <div>
        <Dropdown data={colorSetList} defaultText="Color Set"
                  onChange={this.onChangeColorSet}
                  selected={colorSet}
                  />
        <TextInput text={this.state.inputTurn} onChange={this.onChangeInputTurn} />
        <Button onClick={this.onClickSubmitTurn} />
      </div>
    );

  },

});

module.exports = Component;

