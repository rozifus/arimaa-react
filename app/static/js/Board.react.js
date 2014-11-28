
var React  = require('react'),
    Square = require('./Square.react'),
    Row    = require('./Row.react');

var style = {
  // square element based on width css hack
  border: "1px solid black",
};

var rowStyle = {
  padding: 0,
}

var Board = React.createClass({

  getInitialState: function() {

    var squares = [];
    for (var ri=0; ri<8; ri++) {
      var row = [];
      for (var ci=0; ci<8; ci++) {
        row.push(<Square row={ri} column={ci} />)
      }
      squares.push(row);
    }
    return {squares: squares}

  },

  render: function() {

    var rows = this.state.squares.map(function(row) {
      return(
        <div style={rowStyle} className="row">
          {row}
        </div>
      )
    });

    return(
      <div style={style} className="ui grid">
        {rows}
      </div>
    );
  },

});

module.exports = Board;

