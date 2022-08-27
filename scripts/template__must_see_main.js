import * as module from "./data__must_see.js"

let data = module.data;

//References 5 - https://handlebarsjs.com/

let must_see_main__src = document.getElementById("must_see_main__template").innerHTML;
let must_see_main__template = Handlebars.compile(must_see_main__src);
let must_see_main__rendered = must_see_main__template(data)
console.log(data)
document.getElementById("must_see_main__target").innerHTML = must_see_main__rendered;
      