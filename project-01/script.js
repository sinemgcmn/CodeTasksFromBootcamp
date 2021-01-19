var hamburger = document.getElementById("menu");
var overlay = document.getElementsByClassName("overlay")[0];
var sidenav = document.getElementsByClassName("side-nav")[0];
var quit = document.getElementById("topx");
// var hamburger = document.querySelector("menu");
// var overlay = document.querySelector(".overlay");

var menutrigger = function () {
    hamburger.addEventListener("click", function () {
        overlay.classList.add("on");
        sidenav.classList.add("on");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.add("exit");
        sidenav.classList.add("exit");
    });

    quit.addEventListener("click", function () {
        overlay.classList.add("exit");
        sidenav.classList.add("exit");
    });
};

menutrigger();
