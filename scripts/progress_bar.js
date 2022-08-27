//Finds a maximium height od the web page
//reference[2] -https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
let body = document.body;
let html = document.documentElement;
//end reference


//Progres bar - WD module week 14 video 8.2.4;
let bar = document.getElementsByClassName("progress_bar")[0];

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
  //calculation vertcal progress_bar up to 100%
  let progress_bar = pageYOffset*100/(page_height-window.innerHeight);

  //modifying bar style depending on the progress_bar
  if (bar.classList.contains("darmMode-on")) {}
  if (progress_bar > 99) {
    bar.classList.add("progress_bar--complete")
  } else {
    bar.classList.remove("progress_bar--complete")
  }
  bar.style.width = progress_bar+"%";
});