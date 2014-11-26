
var React  = require('react'),
    Square = require('./Square.react');

var Board = React.createClass({

  getInitialState: function() {

    var squares = [];
    for (var si=0; si<4; si++) {
        squares.push(<Square key={si}/>);
    };
    return {squares: squares}

  },

  render: function() {

    return(
      <div className="row">
        {this.state.squares}
      </div>
    );

  },

});

module.exports = Board;

