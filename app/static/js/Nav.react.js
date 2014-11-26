
var React = require('react');

module.exports = React.createClass({

  render: function() {

    return(
      <div className="ui inverted main menu grid page">
        <div className="column">
          <div className="ui inverted secondary menu">
            <div className="ui item">
              Arimaa
            </div>
            <div className="ui item">
              <div className="ui inverted menu">
                <a className="item">New Game</a>
                <a className="item">Stats</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

});
