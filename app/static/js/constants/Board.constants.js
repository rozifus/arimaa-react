

var keyMirror = require('keymirror');

var RowInt = {};
for (var ri=0; ri<8; ri++) {
  RowInt[String.fromCharCode(ri+97)] = ri
};

var Row = keyMirror(RowInt);

var Movements = keyMirror({
  n: null,
  s: null,
  e: null,
  w: null,
  x: null,
});

module.exports = {

    Row: Row,
    RowInt: RowInt,
    Movements: Movements,

};


