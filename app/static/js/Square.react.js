
var React     = require('react'),
    Piece     = require('./Piece.react'),
    BoardData = require('./Board.data');

var style = {
  width  : "100%",
  height : 0,
  paddingBottom: "12.5%",
  border: "0.15em solid #dddddd;",
};

var Square = React.createClass({

  propTypes: {
    row    : React.PropTypes.number.isRequired,
    column : React.PropTypes.number.isRequired,
  },

  getInitialState: function() {

    var animal = BoardData.DefaultLayout[this.props.row][this.props.column];

    return {
      piece: animal ? <Piece animal={animal} /> : null
    }

  },

  render: function() {

    return(
      <div style={style} className="column two wide game-square">
        {this.state.piece}
      </div>
    );
  },

});

module.exports = Square;

