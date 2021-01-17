console.log("DOM Events - ex 1");

var movingDiv = document.getElementById("movingDiv");

var mousemoveHandler = function (event) {
    var x = event.clientX;
    var y = event.clientY;

    // We accessed this properties naively, thinking it would have worked.
    // we debugged by console.logging their value (empty string)
    // and their type (typeof movingDiv.style.width = string),
    // so we ruled out that they could have contained any useful numbers.
    // var width = movingDiv.style.width;
    // var height = movingDiv.style.height;

    var width = movingDiv.offsetWidth;
    var height = movingDiv.offsetHeight;

    // height and width are numbers, while CSS properties are strings that end with the 'px' unit
    // do not forget!
    movingDiv.style.top = y - height / 2 + "px";
    movingDiv.style.left = x - width / 2 + "px";
};

// Adding the listener to the div itself was not a good strategy!
// movingDiv.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousemove", mousemoveHandler);
