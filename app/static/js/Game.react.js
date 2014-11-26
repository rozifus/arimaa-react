
var React    = require('react'),
    Stub     = require('./Stub.react'),
    Controls = require('./Controls.react'),
    Board    = require('./Board.react');

var Game = React.createClass({

  render: function() {
    return(
      <div className="ui grid">
        <div className="row">
          <div className="three wide column">
            <Stub>Controls</Stub>
          </div>
          <div className="ten wide column">
            <Board />
          </div>
          <div className="three wide column">
            <Stub>Turns</Stub>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Stub>Console</Stub>
          </div>
        </div>
      </div>
    );
  },

});

module.exports = Game;

