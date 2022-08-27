//Script enables activation of the darkMode

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
    //  adds class to elemets which styles it DARK
    
  if (c) {
    console.log("dark mode on");
  } else {
    console.log("dark mode off");
  }
  
  //REFERNECE 3: https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
  //Selection of the elemetns that will be affected by the darkMode
  let allElelmens = document.querySelectorAll(
    "*"
  );
  // If darkMode true then darkMode-on calss is added to queried elements, otherwise it is being removed
  for (let i=0; i<allElelmens.length; i++){
    if (c) {
      allElelmens[i].classList.add("darkMode-on");
    } else {
      allElelmens[i].classList.remove("darkMode-on");
    };
  };
}