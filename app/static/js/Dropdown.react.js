
var React = require('react');

var Dropdown = React.createClass({

  componentDidMount: function() {
    this.activateDropdown();
  },

  activateDropdown: function() {
    $(this.getDOMNode()).dropdown({
      onChange: this.props.onChange
    });
    console.log(this.props.selected);
    //$(this.getDOMNode()).dropdown("set value", this.props.selected)
  },

  render: function() {

    return(
      <select className="ui dropdown">
        {this.props.defaultText ? null :
              <option value="">this.props.defaultText</option>
        }
        {this.props.data.map(function(datum) {
          return( <option key={datum.key} value={datum.key}>
                    {datum.text}
                  </option>
          )
        })}
      </select>
    );

  },

});

module.exports = Dropdown;

