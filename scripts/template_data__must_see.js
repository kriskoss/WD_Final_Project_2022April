
let data = {
  title: "Must See in Warsaw in 1-day",
  places: [
    {name:"Chmielna Street/Nowy Świat Street/Old Town",
     description:"Best place to start a walk when first time in Warsaw. You will walk along many historical places as well as restaurants, cafes and bookshops",
     link:"https://warsawtour.pl/en/project/old-town-2/",
//     links:["https://warsawtour.pl/en/project/old-town-2/"],
//     link_descriptions:['desc1'],
     image_path:'Resources/Images/must_see/chmielna.jpg'
    },

    {name:"Chopin Museum",
     description: "Poland is fameous for Fryderic Chopin music. Just next to the museum is the musical school, where often you can hear as students are practicing. It is unique place in Warsaw ",
     link:"https://warsawtour.pl/en/project/chopin-museum-in-warsaw/", 
      //     links:["https://warsawtour.pl/en/project/chopin-museum-in-warsaw/", "https://muzeum.nifc.pl/en/muzeum/wizyta-informacje"],
      //     link_descriptions:['desc1',"desc2"],
     image_path:"Resources/Images/must_see/chopin_museum.jpg"
    },

    {name:"Łazienki Królewskie",
     description:"Iconic gardns in Poland. Definetely must see in late spring, whole summer and early autumn",
     link:"https://warsawtour.pl/en/project/lazienki-krolewskie-museum-2/",
    //     links:["https://warsawtour.pl/en/project/lazienki-krolewskie-museum-2/"],
    //     link_descriptions:['desc1'],
     image_path: "Resources/Images/must_see/lazienki_palac.jpg"
    },

  ]
};

//Handlebars.registerHelper("list_links", function(this.links, this.desc){
//  let output="<ul>";
//  for (let i=0; i<this.lists.length;i++){
//    output += "<a href="+ this.links[i]+">" +this.desc[i]+ "</a>" 
//  }
//  output+="</ul>"
//  return output
//  
//});
let cafe_src = document.getElementById("must_see__template").innerHTML;
let cafe_template = Handlebars.compile(cafe_src);
let cafe_rendered = cafe_template(data)
document.getElementById("must_see__target").innerHTML = cafe_rendered;
      


