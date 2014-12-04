
var React = require('react');
var Link  = require('./Link.react');
var GameActions = require('../actions/Game.actions');

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
                <Link className="item" onClick={this._handleNewGame} text="New Game" />
                <a className="item">Stats</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  _handleNewGame: function() {
    console.log("handle newgame")
    GameActions.requestNewGame();
  },

});
