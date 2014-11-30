
var React = require('react'),
    Game = require('./Game.react');

var Page = React.createClass({

  render: function() {
    return(
      <div className="ui grid page">
        <div className="row">
          <div className="column">
            <div className="ui segment">
              <Game />
            </div>
          </div>
        </div>
      </div>
    );
  },

});

module.exports = Page;

