
var React = require('react'),
    Board = require('./Board.react');

var style = {
  // square element based on width css hack
};

var OuterBoard = React.createClass({

  render: function() {

    return(
      <div style={style} className="ui grid">
        <div className="row">
          <div className="column">
            <Board />
          </div>
        </div>
      </div>
    );
  },

});

module.exports = OuterBoard;

