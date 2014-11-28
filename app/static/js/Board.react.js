
var React  = require('react'),
    Square = require('./Square.react'),
    Row    = require('./Row.react');

var style = {
  // square element based on width css hack
  border: "1px solid black",
};

var Board = React.createClass({

  getInitialState: function() {

    var rows = [];
    for (var ri=0; ri<8; ri++) {
      rows.push(<Row key={ri}/>);
    }
    return {rows: rows}

  },

  render: function() {

    return(
      <div style={style} className="ui grid">
        {this.state.rows}
      </div>
    );
  },

});

module.exports = Board;

