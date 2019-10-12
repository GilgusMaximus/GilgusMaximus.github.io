// Set a variable for our button element.
let scrollToTopButton;
window.addEventListener('load', doStuff, false);
function doStuff() {
    scrollToTopButton = document.getElementById('backToTop');
    window.addEventListener("scroll", scrollFunction);
    // When the button is clicked, run our ScrolltoTop function above!
    scrollToTopButton.onclick = function (e) {
        e.preventDefault();
        scrollToTop();
    }
}


/*This function is from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(!scrollToTopButton)
        return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}



/*This function is from https://codepen.io/matthewcain/pen/ZepbeR*/

function scrollToTop () {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        // ScrollTo takes an x and a y coordinate.
        // Increase the '10' value to get a smoother/slower scroll!
        window.scrollTo(0, c - c / 10);
    }
};
