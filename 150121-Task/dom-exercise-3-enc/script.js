console.log("DOM Events - ex 3");

var colorDiv = document.getElementById("colorDiv");

var generateRandomColor = function () {
    var colors = ["red", "blue", "yellow", "magenta", "cyan"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

var mouseHandler = function () {
    colorDiv.style.backgroundColor = generateRandomColor();
};

colorDiv.addEventListener("mousedown", mouseHandler);
colorDiv.addEventListener("mouseup", mouseHandler);
