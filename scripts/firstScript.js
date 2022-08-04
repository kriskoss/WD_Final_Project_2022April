

let arr_p = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
//let as=arr_p.getElementsByTagName('a');
console.log(arr_p);
//console.log(as);

let fpIntro = document.getElementsByClassName("fpIntro")[0];
let html = "<div class='temp1'> INSERTED TEXT</div>";
fpIntro.insertAdjacentHTML("afterbegin",html);


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
  document.getElementsByTagName("body")[0].className=c;
}


//EXPERIMENTAL
let makeDark = document.getElementById("makeDark");
if (makeDark) {
  makeDark.onclick = function() {
    console.log("making dark");
    document.getElementsByTagName("body")[0].className="brightDark__dark";
//    let blocks = document.getElementsByClassName("gridArea");
//    for (let i=0; i<blocks.length; i++) {
//      blocks[i].style.backgroundColor="black";
//    }
  };
}



