function sayhello() {
  alert("heloo");
}
let btn = document.getElementById("btn");
btn.onclick = function() {
  try {
    sayhello();
  } catch(err) {
    alert("no say hello funciton");
  }
};
