var hamburger = document.getElementById("menu");
var quit = document.getElementById("topx");
var overlay = document.querySelector(".overlay");
var sidenav = document.querySelector(".side-nav");
// var pop = document.getElementById("popup");
// var newQuit = document.getElementById("newQuit");

var newQuitJQ = $("#newquit");
var popJQ = $("#popup");

popJQ.hide();
popJQ.fadeIn(1000);

newQuitJQ.on("click", function () {
    popJQ.css({ display: "none" });
});

console.log("boardJQ, boardJQ");

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
