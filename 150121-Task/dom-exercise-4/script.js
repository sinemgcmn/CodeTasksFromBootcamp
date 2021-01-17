var mainElement = document.getElementById("mainElement");
var childElement = document.getElementById("childElement");

var generateRandomColor = function () {
    var colors = ["red", "yellow", "blue", "gold", "purple"];
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

var changeBigBox = function () {
    childElement.style.backgroundColor = generateRandomColor();
    mainElement.style.backgroundColor = generateRandomColor();
}    
;

var changeSmallBox = function () {
    childElement.style.backgroundColor = generateRandomColor();
    event.stopPropagation();
}
;
