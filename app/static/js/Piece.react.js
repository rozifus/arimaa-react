
var React      = require('react');
var ThemeStore = require('./Theme.dispatcher');
var PieceData  = require('./Piece.data');

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
    animal: React.PropTypes.string.isRequired,
  },

  componentDidMount: function() {
    ThemeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Themestore.removeChangeListener(this._onChange);
  },

  render: function() {

    var image_src = PieceData.Images[this.props.animal];
    return(
      <img style={style} className="ui image" src={image_src} />
    );
  },

});

module.exports = Piece;

