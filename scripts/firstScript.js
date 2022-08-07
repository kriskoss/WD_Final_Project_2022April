

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


//function changeSize(c) {
//  document.getElementsByTagName("body")[0].className=c;
//}

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
  let allElelmens = document.querySelectorAll(
    "body, main, button, a, h2, img, .gridArea, .app, .fpTitleDiv__text, .fpTitleDiv__text .redText, #fpLogoDiv");
//  REFERNECE: https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
  for (let i=0; i<allElelmens.length; i++){
    if (c) {
      allElelmens[i].classList.add("darkMode-on");
    } else {
      allElelmens[i].classList.remove("darkMode-on");
    };
  };
}

