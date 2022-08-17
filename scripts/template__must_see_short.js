import * as module from "./data__must_see.js"

let data = module.data;

let cafe_src = document.getElementById("must_see_short__template").innerHTML;
let cafe_template = Handlebars.compile(cafe_src);
let cafe_rendered = cafe_template(data)
document.getElementById("must_see_short__target").innerHTML = cafe_rendered;
      