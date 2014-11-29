
var React = require('react');
var Dropdown = require('./Dropdown.react');
var ThemeStore = require('./Theme.store');
var ThemeActioner = require('./Theme.actioner');

var Component = React.createClass({


  onChangeColorSet: function(event, value) {
    ThemeActioner.setColorSet(event)
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
      </div>
    );

  },

});

module.exports = Component;

