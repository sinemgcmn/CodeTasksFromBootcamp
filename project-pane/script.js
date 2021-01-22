var containerJQ = $(".container");
var sliderJQ = $(".slider");
var topJQ = $(".top");

var initialXPositionOfSlider = sliderJQ.offset().left;
var distance = 0;
var isMoving = false;

sliderJQ.mousedown(function () {
    isMoving = true;
    containerJQ.mousemove(function (e) {
        if (isMoving) {
            var x = e.clientX;
            if (x > containerJQ.width()) return false;
            distance = initialXPositionOfSlider - x;
            topJQ.css({ width: initialXPositionOfSlider - distance + "px" });
            sliderJQ.css({ left: x - sliderJQ.width() });
        }
    });
});

sliderJQ.mouseup(function (e) {
    isMoving = false;
});

sliderJQ.mouseleave(function () {
    console.log("A mouseleave was captured on the document!");
});
