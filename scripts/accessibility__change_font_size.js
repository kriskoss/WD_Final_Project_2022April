//Script enalbes change the font size

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
