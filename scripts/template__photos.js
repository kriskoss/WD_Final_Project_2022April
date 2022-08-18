//import * as module from "./data__cafes.js"
//
let data = [];
let imgs_num = 20;
for (let i=1;i<=imgs_num;i++){
  data.push("photo (" + i +").jpg")
  
}
data = {photos: data}
console.log(data)

let photos__src = document.getElementById("photos__template").innerHTML;
let photos__template = Handlebars.compile(photos__src);

  Handlebars.registerHelper("list", function (list) {
    let output = "<div class='column'>"
    let imgs_num = 20;
    let step= Math.ceil(imgs_num/4)
    for (let i=0; i<imgs_num;i++) {
      if (i==step*1  || i==step*2 || i==step*3){
        output+='</div> <div class="column">'
      }
      output += '<img src="Resources/Images/page_gallery/' + String(list[i]) + '" class="photos__img">'
    }
    console.log(list)
    output += "</div>"
    return output
  })

  //it the line below we are passing the data into best_template
  let photos__rendered = photos__template(data)

document.getElementById("photos__target").innerHTML = photos__rendered;
