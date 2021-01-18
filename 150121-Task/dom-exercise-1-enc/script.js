var movingDiv = document.getElementById("movingDiv");

var mousemoveHandler = function (event) {
    var x = event.clientX;
    var y = event.clientY;

    var width = movingDiv.offsetWidth;
    var height = movingDiv.offsetHeight;

    movingDiv.style.top = y - height / 2 + "px";
    movingDiv.style.left = x - width / 2 + "px";
};

document.addEventListener("mousemove", mousemoveHandler);
