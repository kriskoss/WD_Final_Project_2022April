import * as module from "./data__cafes.js"

let data = module.data

//References 5 - https://handlebarsjs.com/

let cafes_main_src = document.getElementById("cafes_main_template").innerHTML;
let cafes_main_template = Handlebars.compile(cafes_main_src);
console.log(data)
let cafes_main_rendered = cafes_main_template(data)
document.getElementById("cafes_main_target").innerHTML = cafes_main_rendered;
