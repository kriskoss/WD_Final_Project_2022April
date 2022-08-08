

let arr_p = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
//let as=arr_p.getElementsByTagName('a');
console.log(arr_p);
//console.log(as);

//let fpIntro = document.getElementsByClassName("fpIntro")[0];
//let html = "<div class='temp1'> INSERTED TEXT</div>";
//fpIntro.insertAdjacentHTML("afterbegin",html);


let smallA=document.getElementById("smallA");
let mediumA=document.getElementById("mediumA");
let largeA=document.getElementById("largeA");

smallA.onclick= function() {
  changeSize("small");
};
mediumA.onclick= function() {
  changeSize("medium");
};
largeA.onclick= function() {
  changeSize("large");
};

function changeSize(c) {
  let bdy = document.getElementsByTagName("body")[0];
  bdy.classList.remove("small");
  bdy.classList.remove("medium");
  bdy.classList.remove("large");
  bdy.classList.add(c);
  console.log("Text size set to " + c);
}

//EXPERIMENTAL
let makeDark = document.getElementById("makeDark");
let makeBright = document.getElementById("makeBright");

if (makeDark) {
  makeDark.onclick = function() {
    darkMode(true);
  };
}

if (makeBright) {
  makeBright.onclick = function() {
    darkMode(false);
  };
}

function darkMode(c) {
  //    adds class to elemets which styles it DARK
//  let allElelmens = document.getElementsByTagName("*");
  if (c) {
    console.log("dark mode on");
  } else {
    console.log("dark mode off");
  }
  let allElelmens = document.querySelectorAll("body, main, button, a, h2, img, .gridArea, .app, .fpTitleDiv__text, .fpTitleDiv__text .redText, #fpLogoDiv, .progress");
//  REFERNECE: https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
  for (let i=0; i<allElelmens.length; i++){
    if (c) {
      allElelmens[i].classList.add("darkMode-on");
    } else {
      allElelmens[i].classList.remove("darkMode-on");
    };
  };
}

//Finds a maximium height od the web page
//reference-https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
let body = document.body;
let html = document.documentElement;
//end reference


//Progres bar - WD module week 14 video 8.2.4;
let bar = document.getElementsByClassName("progress")[0];

//updating body and document dimensions when ZOOM level changes
window.addEventListener("resize",function() {
  body = document.body;
  html = document.documentElement;
});

window.addEventListener("scroll", function(){
  let page_height = Math.max(
  body.scrollHeight, body.offsetHeight,html.clientHeight,
  html.scrollHeight, html.offsetHeight
);
  //calculation vertcal progress up to 100%
  let progress = pageYOffset*100/(page_height-window.innerHeight);
  
  //modifying bar style depending on the progress
  if (bar.classList.contains("darmMode-on")) {}
  if (progress > 99) {
    bar.classList.add("progress--complete")
//    bar.style.borderBottomColor ="#146014";
  } else {
    bar.classList.remove("progress--complete")
//    bar.style.borderBottomColor = "hsl("+ progress/3+", 30%, 50%";
  }
  
  bar.style.width = progress+"%";
  console.log(bar.style.width,progress);
  
  
});




