
var React      = require('react');
var ThemeStore = require('../stores/Theme.store');

var style = {
  width  : "80%",
  height : "80%",
  position: "absolute",
  margin: "auto",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

var Piece = React.createClass({

  propTypes: {
    pieceCode: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return this.getStateFromStores();
  },

  componentDidMount: function() {
    ThemeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Themestore.removeChangeListener(this._onChange);
  },

  render: function() {

    return(
      <img style={style} className="ui image" src={this.state.img_src} />
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStores());
  },

  getStateFromStores: function() {
    return {
      img_src: ThemeStore.getPieceImgSrc( this.props.pieceCode )
    };
  },


});

module.exports = Piece;

