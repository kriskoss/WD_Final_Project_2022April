
let data = {
  title: "Must See in Warsaw in 1-day",
  places: [
    {name:"Nowy Świat Street/Old Town",
     description:"Best place to start a walk when first time in Warsaw. You will walk along many historical places as well as restaurants, cafes and bookshops",
     link:"https://warsawtour.pl/en/project/old-town-2/",
    },

    {name:"Chopin Museum",
     description:"Poland is fameous for Fryderic Chopin music. ",
     link:"https://warsawtour.pl/en/project/chopin-museum-in-warsaw/",},

    {name:"Łazienki Królewskie",
     description:"Iconic gardns in Poland. Definetely must see in late spring, whole summer and early autumn",
     link:"https://warsawtour.pl/en/project/lazienki-krolewskie-museum-2/",},

  ]
};

let cafe_src = document.getElementById("must_see__template").innerHTML;
let cafe_template = Handlebars.compile(cafe_src);
let cafe_rendered = cafe_template(data)
document.getElementById("must_see__target").innerHTML = cafe_rendered;
      


