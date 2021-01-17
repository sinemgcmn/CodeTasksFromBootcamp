var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var links = headlines.getElementsByTagName("a");
console.log(left);
console.log(-links[0].offsetWidth);

function moveHeadLines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left += links[0].offsetWidth;
    }
    headlines.style.left = left + "px";
    requestAnimationFrame(moveHeadLines);
}

headlines.append(links[0]);
moveHeadLines();

console.log("links: ", links);

for (var i = 0; i < links.length; i++) {
    // console.log("links[i]: ", links[i]);
    links[i].addEventListener("mouseenter", function (e) {
        console.log("e.target mouse enter: ", e.target);
        // update the style of that specific link..
        // stop the ticker....
    });
    links[i].addEventListener("mouseleave", function (e) {
        console.log("e.target mouse leave: ", e.target);
        // restart our headlines moving....
    });
}

// function moveHeadlines() {
//     console.log("I am doing something..");
//     requestId = requestAnimationFrame(moveHeadlines);
//     console.log("requestId: ", requestId);
// }
