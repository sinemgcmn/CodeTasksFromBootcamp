(function () {
    var box = document.getElementById("box");
    var move = document.getElementById("move");
    var back = document.getElementById("moveback");

    move.addEventListener("click", function () {
        box.classList.add("on");
    });

    back.addEventListener("click", function () {
        box.classList.remove("on");
    });
})();
