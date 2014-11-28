
var React = require('react'),
    Piece = require('./Piece.react');

var style = {
  width  : "100%",
  height : 0,
  paddingBottom: "12.5%",
  border: "0.15em solid #dddddd;",
};

var Square = React.createClass({

  render: function() {
    return(
      <div style={style} className="column two wide game-square">
        <Piece animal="e"/>
      </div>
    );
  },

});

module.exports = Square;

