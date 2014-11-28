
var React    = require('react'),
    SVGPiece = require('./SVGPiece.react');

var style = {
  // square element based on width css hack
  width: "100%",
  height: "0",
  paddingBottom: "100%"
};

var Board = React.createClass({

  getInitialState: function() {

    var pieces = [];
    for (var ri=0; ri < 8; ri++) {
      for (var ci=0; ci < 8; ci++) {
          pieces.push(<SVGPiece row={ri} column={ci} />)
      };
    };
    return { pieces: pieces };

  },

  render: function() {

    return(
      <svg style={style}>
        {this.state.pieces}
      </svg>
    );

  },

});

module.exports = Board;
