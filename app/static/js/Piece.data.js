
var keyMirror = require('keymirror');

var img_src_base = "/static/res/gfx/40x40",
    img_ext  = ".svg"

var animal_path = {
  E: "1-elephant",
  M: "2-camel",
  H: "3-horse",
  D: "4-dog",
  C: "5-cat",
  R: "6-rabbit",

  e: "1-elephant",
  m: "2-camel",
  h: "3-horse",
  d: "4-dog",
  c: "5-cat",
  r: "6-rabbit",
}

var color_path = {
  g: '-gs/g-',
  s: '-gs/s-',
  b: '-bw/b-',
  w: '-bw/w-',
}

var Players = keyMirror({
  ONE: null,
  TWO: null,
})

var Images = {}
for (var key in image_names) {
  Images[key] = img_base + image_names[key] + img_ext;
}

var getImgSrc = function(colorSet, team, animal) {

}

module.exports = {
  Images: Images,
}
