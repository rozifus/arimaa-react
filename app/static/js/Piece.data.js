
var img_base = "/static/res/gfx/40x40-gs/",
    img_ext  = ".svg"

var image_names = {
  E: "g-1-elephant",
  M: "g-2-camel",
  H: "g-3-horse",
  D: "g-4-dog",
  C: "g-5-cat",
  R: "g-6-rabbit",

  e: "s-1-elephant",
  m: "s-2-camel",
  h: "s-3-horse",
  d: "s-4-dog",
  c: "s-5-cat",
  r: "s-6-rabbit",
}

var Images = {}
for (var key in image_names) {
  Images[key] = img_base + image_names[key] + img_ext;
}

module.exports = {
  Images: Images,
}
