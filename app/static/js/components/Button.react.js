
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      text: "Button",
    }
  },

  render: function() {

    return(
      <div className="ui primary button"
           onClick={this.props.onClick} >{this.props.text}</div>
    )

  }

});
