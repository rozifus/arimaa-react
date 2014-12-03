
var React = require('react'),
    Nav   = require('./Nav.react'),
    Page  = require('./Page.react');

module.exports = React.createClass({

  render: function() {
    return(
      <div>
        <Nav />
        <Page />
      </div>
    );
  },

});

