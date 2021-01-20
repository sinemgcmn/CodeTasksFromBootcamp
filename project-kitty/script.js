(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll(".dots div");
    var currentKitty = 0;
    var total = kitties.length;

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        dots[currentKitty].classList.remove("on"); //white is moving
        currentKitty++;
        if (currentKitty >= total) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen"); // kitty continue
        dots[currentKitty].classList.add("on"); //kitty continue
        console.log(currentKitty);
        setTimeout(moveKitties, 5000);
    }
    setTimeout(moveKitties, 1000);

    document.addEventListener("transitionend", function (event) {
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
    });
})();
