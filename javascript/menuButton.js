
let headerBar = null;
let menuButton = null;

window.onload = function () {
    headerBar = this.document.getElementById("headerBar");
    menuButton = this.document.getElementById("menuButton");
    menuButton.style.display = "none";
}




function showMenu(){
    menuButton.style.display = "block";
    headerBar.style.display = "none";
}

function showBar(){
    menuButton.style.display = "block";
    headerBar.style.display = "none";
}