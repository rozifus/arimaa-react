
var React = require('react');

var Dropdown = React.createClass({

  render: function() {

    return(
      <div class="ui selection dropdown">
        <div className="default text">{this.props.defaultText}</div>
        <div class="menu">
          {this.props.data.map(function(datum) {
            return( <div class="item" data-value={datum.value}>
                      {datum.text}
                    </div>
            )
          })}
        </div>
      </div>
    );
  },

});

module.exports = Dropdown;

