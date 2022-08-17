import * as module from "./data__cafes.js"

let data = module.data

let cafeShort_src = document.getElementById("cafeShort_template").innerHTML;
let cafeShort_template = Handlebars.compile(cafeShort_src);
let cafeShort_rendered = cafeShort_template(data)
document.getElementById("cafeShort_target").innerHTML = cafeShort_rendered;
