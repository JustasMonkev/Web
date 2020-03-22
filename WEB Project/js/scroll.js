// MENU SCROLL DOWN
var lastScrollTop = 300;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var screenTop = window.pageYOffset || document.documentElement.scrollTop;
    if (screenTop > lastScrollTop) {
        navbar.classList.add("site-navbar-color");
        navbar.style.top = "-25px";
    }
    if (screenTop <= lastScrollTop) {
        navbar.classList.remove("site-navbar-color");
        navbar.classList.add("site-navbar");
    }
});

