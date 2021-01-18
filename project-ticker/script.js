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
