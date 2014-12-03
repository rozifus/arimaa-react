
var React = require('react');

module.exports = React.createClass({

  render: function() {

    var text = "Stub";
    if (typeof(this.props.children) == "string") {
        text = this.props.children;
    }

    return(
      <div>
        <i>{text}</i>
      </div>
    );
  },

});


