var hamburger = document.getElementById("menu");
var quit = document.getElementById("topx");
var overlay = document.querySelector(".overlay");
var sidenav = document.querySelector(".side-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.add("on");
    overlay.classList.add("on");
    sidenav.classList.add("on");
});

overlay.addEventListener("click", function () {
    overlay.classList.remove("on");
    sidenav.classList.remove("on");
    hamburger.classList.remove("on");
});

quit.addEventListener("click", function () {
    overlay.classList.remove("on");
    sidenav.classList.remove("on");
    hamburger.classList.remove("on");
});
