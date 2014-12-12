
var React               = require('react'),
    Piece               = require('./Piece.react'),
    Overlay             = require('./Overlay.react'),
    GameStore           = require('../stores/Game.store');
    InterfaceStore      = require('../stores/Interface.store');
    InterfaceActions    = require('../actions/Interface.actions');

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
    InterfaceStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GameStore.removeChangeListener(this._onChange);
    InterfaceStore.removeChangeListener(this._onChange);
  },

  render: function() {

    console.log(this.state.overlayImg)

    var overlay = (this.state.overlayImg != false) ? <Overlay img_src={this.state.overlayImg}/> : null;
    var piece = (this.state.pieceCode != false) ? <Piece pieceCode={this.state.pieceCode}/> : null;

    return(
      <div style={style} className="column two wide game-square"
           onMouseEnter={this._onMouseEnter} >
        {overlay}
        {piece}
      </div>
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStores());
  },

  _onMouseEnter: function() {
    InterfaceActions.mouseEnterSquare(this.props.row, this.props.column);
  },

  getStateFromStores: function() {
    return {
      pieceCode: GameStore.getPieceAt(this.props.row, this.props.column),
      overlayImg: InterfaceStore.getOverlayImgAt(this.props.row, this.props.column)
    }
  }

});

module.exports = Square;

