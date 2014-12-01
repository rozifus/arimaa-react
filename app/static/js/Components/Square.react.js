
var React           = require('react'),
    Piece           = require('./Piece.react'),
    GameStore       = require('../Fluxers/Game.store');

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
    return this.getStateFromStores();
  },

  componentDidMount: function() {
    GameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GameStore.removeChangeListener(this._onChange);
  },

  render: function() {

    var piece = this.state.pieceType ? <Piece pieceType={this.state.pieceType}/> : null;

    return(
      <div style={style} className="column two wide game-square">
        {piece}
      </div>
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStores());
  },

  getStateFromStores: function() {
    return {
      pieceType: GameStore.getPieceAt(this.props.row, this.props.column)
    }
  }

});

module.exports = Square;

