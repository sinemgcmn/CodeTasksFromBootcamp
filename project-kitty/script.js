(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;
    var total = kitties.length;
    console.log("kitties: ", kitties);

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;
        if (currentKitty >= total) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");
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
