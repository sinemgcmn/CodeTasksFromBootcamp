(function () {
    var ticker = $("#ticker");
    var headlines = ticker.find(".headlines");
    var links = headlines.find("a");
    var curX = headlines.offset().left;
    var linkWidth = links.eq(0).outerWidth();
    var animId;

    headlines.on("mouseenter", function () {
        cancelAnimationFrame(animId);
    });

    headlines.on("mouseleave", function () {
        moveHeadlines();
    });

    moveHeadlines();

    function moveHeadlines() {
        curX--;
        console.log(curX, -linkWidth);
        if (curX < -linkWidth) {
            curX += linkWidth;
            links.eq(0).appendTo(headlines);
            links = headlines.find("a");
            linkWidth = links.eq(0).outerWidth();
        }
        headlines.css({
            left: curX + "px",
        });
        animId = requestAnimationFrame(moveHeadlines);
    }
})();
