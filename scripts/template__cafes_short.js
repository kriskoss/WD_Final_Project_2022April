import * as module from "./data__cafes.js"

let data = module.data

let cafes_short__src = document.getElementById("cafes_short__template").innerHTML;
let cafes_short__template = Handlebars.compile(cafes_short__src);
let cafes_short__rendered = cafes_short__template(data)
document.getElementById("cafes_short__target").innerHTML = cafes_short__rendered;
