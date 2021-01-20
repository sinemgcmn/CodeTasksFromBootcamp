(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;
    var total = kitties.length;
    console.log("kitties: ", kitties);

    function moveKitties() {
        kitties[currentKitty].classList.add("onscreen");
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;
        if (currentKitty == total - 1) {
            currentKitty = 0;
        } else {
            currentKitty;
        }
        kitties[currentKitty].classList.add("onscreen");
        console.log(currentKitty);
        setTimeout(moveKitties, 5000);
    }
    setTimeout(moveKitties, 1000);

    // document.addEventListener("transitionend", function (e) {
    //     if (kitties[currentKitty].classList.contains("exit")) {
    //         kitties[currentKitty].classList.remove("exit");
    //     } else {
    //         console.log("transition ended....", e.target.classList);
    //     }
    // });
})();
