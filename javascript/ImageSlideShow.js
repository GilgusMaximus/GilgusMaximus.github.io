var slideIndex = 1;
window.onload = function () {
    showDivs(slideIndex);
}

//code from https://www.w3schools.com/w3css/w3css_slideshow.asp

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideShowImage");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    console.log("INDEX: ", slideIndex-1);
    x[slideIndex-1].style.display = "block";
}