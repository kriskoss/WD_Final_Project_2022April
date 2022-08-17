import * as module from "./data__cafes.js"

let data = module.data

let cafe_src = document.getElementById("cafe_template").innerHTML;
let cafe_template = Handlebars.compile(cafe_src);
let cafe_rendered = cafe_template(data)
document.getElementById("cafe_target").innerHTML = cafe_rendered;

//import * as module from "./data__cafes.js"
//
//let aside1_src = document.getElementById("aside1_template").innerHTML;
//let aside1_template = Handlebars.compile(aside1_src);
//let aside1_rendered = aside1_template(data)
//document.getElementById("aside1_target").innerHTML = aside1_rendered;



