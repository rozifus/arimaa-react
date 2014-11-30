
var React  = require('react'),
    Square = require('./Square.react');

var style = {
  padding: 0
}

var Row = React.createClass({

  getInitialState: function() {

    var squares = [];
    for (var si=0; si<8; si++) {
        squares.push(<Square key={si}/>);
    };
    return {squares: squares}

  },

  render: function() {

    return(
      <div style={style} className="row">
        {this.state.squares}
      </div>
    );

  },

});

module.exports = Row;

