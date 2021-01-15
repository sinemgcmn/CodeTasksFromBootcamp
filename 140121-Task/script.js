//////FIRST

function changeStyle(selector) {
    var selectorStyle = document.querySelectorAll(selector);
    for (var i = 0; i < selectorStyle.length; i++) {
        selectorStyle[i].style.fontStyle = "italic";
        selectorStyle[i].style.fontWeight = "bold";
        selectorStyle[i].style.textDecoration = "underline";
    }
    return selectorStyle;
}

console.log(changeStyle(".bottom-text"));

//SECOND

function makeClass(className) {
    var classTest = document.getElementsByClassName(className);
    var arr = [];
    for (var i = 0; i < classTest.length; i++) {
        arr.push(classTest[i]);
    }
    return arr;
}

console.log(makeClass("first-section"));

///THIRD

function insertElement(element) {
    // for (var i = 0; i < element.length; i++) {
    var newElement = document.createElement(element);
    var content = document.createTextNode("AWESOME");
    newElement.appendChild(content);
    document.body.append(newElement);
    newElement.style.marginTop = "100px";
    newElement.style.marginLeft = "20px";
    newElement.style.position = "fixed";
    newElement.style.zIndex = "2147483647";
    newElement.style.fontSize = "200px";
}

console.log(insertElement("mynewelement"));
