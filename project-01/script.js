(function () {
    var hamburger = document.getElementById("menu-button");
    var overlay = document.getElementsByClassName("overlay");
    var p = document.getElementById("move");
    var quit = document.getElementById("topx");

    hamburger.addEventListener("click", function () {
        overlay.classList.add("on");
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
