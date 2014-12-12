
var React      = require('react');

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

var Overlay = React.createClass({

  propTypes: {
    img_src: React.PropTypes.string.isRequired,
  },

  render: function() {

    return(
      <img style={style} className="ui image" src={this.props.img_src} />
    );
  },

});

module.exports = Overlay;

