// PLAY BUTTON
var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function (e) {
    e.preventDefault;
    if (audio.paused) {
        audio.play();
        document.getElementById("button").classList.remove("musicbuttoncontorl")
        document.getElementById("button").classList.add("pausebutton");
    } else {
        audio.pause();
        document.getElementById("button").classList.add("musicbuttoncontorl");
        document.getElementById("button").classList.remove("pausebutton")
    }
});
// PLAY BUTTON
// MENU SCROLL DOWN
var lastScrollTop = 600;
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
//// MENU SCROLL DOWN
var form = document.getElementById("form1");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("You just subricbed to NAS");
});
