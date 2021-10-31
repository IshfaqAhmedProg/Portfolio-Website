window.onscroll = function() {
    navFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function navFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.visibility = "visible";
    } else {
        navbar.classList.remove("sticky");
        navbar.style.visibility = "hidden";
    }
}