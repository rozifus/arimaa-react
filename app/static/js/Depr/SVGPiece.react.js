
var React = require('react');

var style = {
};

var Piece = React.createClass({

  getInitialState: function() {

    return {
      x: this.props.row    * 40 + 20,
      y: this.props.column * 40 + 20
    }

  },

  render: function() {

    return( <g dangerouslySetInnerHTML={{
              __html: '<image xlink:href="/static/res/gfx/40x40-gs/g-1-elephant.svg"' +
                      ' width="12.5%" height="12.5%"' +
                      ' x="' + this.state.x + 'px"' +
                      ' y="' + this.state.y + 'px" />'
            }}>
            </g>
    );
  },

});

module.exports = Piece;
