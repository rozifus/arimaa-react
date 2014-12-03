
var React    = require('react'),
    Stub     = require('./Stub.react'),
    Controls = require('./Controls.react'),
    OuterBoard   = require('./OuterBoard.react'),
    Board    = require('./Board.react');

var Game = React.createClass({

  render: function() {
    return(
      <div className="ui grid">
        <div className="row">
          <div className="four wide column">
            <Controls />
          </div>
          <div className="eight wide column">
            <OuterBoard />
          </div>
          <div className="four wide column">
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

