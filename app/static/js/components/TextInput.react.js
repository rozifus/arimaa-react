
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func,
  },

  render: function() {

    return(
      <div className="ui input">
        <input onChange={this.textChanged} type="text"
               value={this.props.text} />
      </div>
    )

  },

  textChanged: function(event) {
    this.props.onChange(event, event.target.value);
  },

});
