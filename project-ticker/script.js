(function () {
    ticker("ticker1", -1);

    ticker("ticker2", 1);

    function ticker(id, step) {
        var ticker = document.getElementById(id);
        var headlines = ticker.querySelector(".headlines");
        var links = headlines.getElementsByTagName("a");
        var left = headlines.offsetLeft;
        var headlinesWidth = headlines.offsetWidth;
        var tickerWidth = ticker.offsetWidth;
        var linkWidth =
            step < 0
                ? links[0].offsetWidth
                : links[links.length - 1].offsetWidth;
        var animId;

        headlines.addEventListener("mouseenter", function () {
            cancelAnimationFrame(animId);
        });

        headlines.addEventListener("mouseleave", function () {
            moveHeadLines();
        });

        moveHeadLines();

        function moveHeadLines() {
            left += step;
            if (step < 0 && left < -linkWidth) {
                left += linkWidth;
                headlines.appendChild(links[0]);
                linkWidth = links[0].offsetWidth;
            }
            if (step > 0 && left + headlinesWidth > tickerWidth + linkWidth) {
                left -= linkWidth;
                headlines.insertBefore(links[links.length - 1], links[0]);
                linkWidth = links[links.length - 1].offsetWidth;
            }
            headlines.style.left = left + "px";
            animId = requestAnimationFrame(moveHeadLines);
        }
    }
})();
