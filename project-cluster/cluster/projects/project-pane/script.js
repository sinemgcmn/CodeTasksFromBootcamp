var containerJQ = $(".container");
var sliderJQ = $(".slider");
var topJQ = $(".top");

var initialXPositionOfSlider = sliderJQ.offset().left;
var distance = 0;
var isMoving = false;

sliderJQ.on("mousedown", function () {
    isMoving = true;
    containerJQ.on("mousemove", function (e) {
        if (isMoving) {
            var x = e.clientX;
            if (x > containerJQ.width()) return false;
            distance = initialXPositionOfSlider - x;
            topJQ.css({ width: initialXPositionOfSlider - distance + "px" });
            sliderJQ.css({ left: x - sliderJQ.width() });
        }
    });
});

sliderJQ.on("mouseup", function (e) {
    isMoving = false;
});

sliderJQ.on("mouseleave", function () {
    console.log("A mouseleave was captured on the document!");
});
