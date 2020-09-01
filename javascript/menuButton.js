
let headerBar = null;
let menuButton = null;

window.onload = function () {
    body1 = this.document.getElementById("body1");
    body2 = this.document.getElementById("body2");
    //menuButton.style.display = "none";
}


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  } 

function showMenu(){
    body2.style.display = "block";
    body1.style.display = "none";
}

function showBar(){
    body1.style.display = "block";
    body2.style.display = "none";
}