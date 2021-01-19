(function () {
    var hamburger = document.getElementById("menu-button");
    var overlay = document.getElementsByClassName("overlay");
    var sidenav = document.getElementsByClassName("side-nav");
    var p = document.getElementById("move");
    var quit = document.getElementById("topx");

    hamburger.addEventListener("click", function () {
        overlay.classList.remove("on");
        sidenav.classList.remove("on");
    });

    p.addEventListener("click", function () {
        overlay.classList.remove("on");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("on");
    });

    quit.addEventListener("click", function () {
        overlay.classList.remove("on");
    });
})();
