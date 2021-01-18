var overlay = document.getElementsByClassName("overlay");
var sidenav = document.getElementsByClassName("side-nav");
var hamburger = document.getElementById("menu-button");
var p = document.getElementById("move");

hamburger.addEventListener("click", function () {
    overlay[0].classList.add("on");
    sidenav[0].classList.add("on");
});

p.addEventListener("click", function () {
    overlay[0].classList.remove("on");
});

overlay.addEventListener("click", function () {
    overlay[0].classList.remove("on");
});
