
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    click: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      text: "Link",
    }
  },

  render: function() {

    return(
      <a className={this.props.className}
         onClick={this.props.onClick} >{this.props.text}</a>
    )

  }

});
