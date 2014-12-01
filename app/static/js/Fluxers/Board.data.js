
var getDefaultLayout = function() {
  return [
    ['C', 'D', 'H', 'M', 'E', 'H', 'D', 'C'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['' , '' , '' , '' , '' , '' , '' , '' ],
    ['r', 'r' ,'r' ,'r' ,'r' ,'r' ,'r' ,'r'],
    ['c', 'd', 'h', 'm', 'e', 'h', 'd', 'c']
  ];
};

module.exports = {
  getDefaultLayout: getDefaultLayout
}
