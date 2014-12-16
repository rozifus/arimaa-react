
module.exports = function(keyMirror, dataMap) {
  Object.keys(keyMirror).forEach(function(key) {
    if (typeof(dataMap[key]) == 'undefined') {
      console.log("constantData Error: key " + key + " not found in dataMap" );
    };
  });
  Object.keys(dataMap).forEach(function(key) {
    if (typeof(keyMirror[key]) == 'undefined') {
      console.log("constantData Error: key " + key + " not found in keyMirror" );
    };
  });

  return {
    Keys: keyMirror,
    Data: dataMap,
  };

};


