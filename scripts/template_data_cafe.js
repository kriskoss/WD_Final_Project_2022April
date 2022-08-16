let path__nero="Resources/Images/common/Cafe__logo/nero__logo.png"
let path__costa="Resources/Images/common/Cafe__logo/costa__logo.png"
let path__starbucks="Resources/Images/common/Cafe__logo/starbucks__logo.png"

let data = {
  title: "Best cafes",
  cafes: [
    {name:"Nero Cafe Nowy Świat",
     img_path:"Resources/Images/homepage/alley.jpg",
     logo_path: path__nero,
     description:"Always busy cafe in the main turistic street of Warsaw, the Nowy Świat Street",
    },

    {name:"Starbucks - City Center",
     img_path:"Resources/Images/homepage/iluzjon.jpg",
     logo_path: path__starbucks,
     description:"Large Starbucks with a view to the main landmark of Warsaw - the Pałac Kultury i Nauki",},

    {name:"Costa - Powiśle",
     img_path:"Resources/Images/homepage/alley.jpg",
     logo_path: path__costa,
     description:"Nicel located Costa down from the Nowy Świat in the direction of the Wisła River",},

  ]
};

let cafe_src = document.getElementById("cafe_template").innerHTML;
let cafe_template = Handlebars.compile(cafe_src);
let cafe_rendered = cafe_template(data)
document.getElementById("cafe_target").innerHTML = cafe_rendered;
      


