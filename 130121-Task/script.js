function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return this.width * this.height;
    };
}
var smallRectangle = new Rectangle(4, 5);

function Square(n) {
    Rectangle.call(this, n, n);
}
var square = new Square(4);

//test

console.log(smallRectangle.getArea());
console.log(square.getArea());

///// INVERT CASE

function invertCase(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(invertCase("HEY this ONE"));
console.log(invertCase("HEY THIS IS MY INVERTCASE"));
