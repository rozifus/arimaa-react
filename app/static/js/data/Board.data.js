
var getDefaultLayout = function() {

  return [
    ['C', 'D', 'H', 'M', 'E', 'H', 'D', 'C'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['r', 'r' ,'r' ,'r' ,'r' ,'r' ,'r' ,'r'],
    ['c', 'd', 'h', 'm', 'e', 'h', 'd', 'c']
  ];

};

var getDefaultLayoutString = function() {

  var board = getDefaultLayout()

  var boardStr = ""
  board.map(function(row) {
    row.map(function(piece) {
      boardStr += piece;
    })
  })

  return boardStr;

}

module.exports = {
  get DefaultLayout() {
    return getDefaultLayout();
  },
  get DefaultLayoutString() {
    return getDefaultLayoutString();
  },
}
