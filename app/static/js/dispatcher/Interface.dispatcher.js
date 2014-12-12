

var Dispatcher = require('flux').Dispatcher;
var assign     = require('object-assign');

var InterfaceDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    var payload = {
      //source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = InterfaceDispatcher;


