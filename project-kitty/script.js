(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll(".dots div");
    var currentKitty = 0;
    var total = kitties.length;
    var timer; // will correct this

    /* FIRST PART */

    function moveKitties(newKitty) {
        kitties[currentKitty].classList.remove("onscreen");
        kitties[currentKitty].classList.add("exit");
        dots[currentKitty].classList.remove("on"); //white is moving
        currentKitty++;

        if (typeof newKitty != "undefined") {
            currentKitty = newKitty;
        }

        if (currentKitty >= total) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen"); // kitty continue
        dots[currentKitty].classList.add("on"); //kitty continue
        console.log(currentKitty);
        setTimeout(moveKitties, 5000);
    }
    setTimeout(moveKitties, 5000);

    document.addEventListener("transitionend", function (event) {
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
    });

    /* SECOND PART -CLICK*/

    /* With the below one I know which one is clicked anymore */

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    var newKitty = i;
                    moveKitties(newKitty);
                    break;
                }
            }
            clearTimeout(timer);
        });
    }
})();
