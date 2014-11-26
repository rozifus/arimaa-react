
var React = require('react'),
    Row   = require('./Row.react');

var Board = React.createClass({

  getInitialState: function() {

    var rows = [];
    for (var ri=0; ri < 4; ri++) {
      rows.push(<Row key={ri}/>);
    }
    return {rows: rows}

  },

  render: function() {

    return(
      <div className="ui grid">
        {this.state.rows}
      </div>
    );
  },

});

module.exports = Board;

