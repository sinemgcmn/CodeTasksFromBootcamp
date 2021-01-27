(function () {
    $.ajax({
        url: "/headlines.json",
        method: "GET",
        success: function (responseData) {
            var myHtml = "";
            for (var i = 0; i < responseData.length; i++) {
                var headlines = responseData[i].headline;
                var links = responseData[i].link;
                console.log(links);
                myHtml +=
                    "<a class='headline' href=" +
                    links +
                    ">" +
                    headlines +
                    "</a>";
            }
            $(".headlines").html(myHtml);
        },
        error: function (err) {
            console.log("error in ajax:", err);
        },
    });

    var ticker = $("#ticker");
    var headlines = ticker.find(".headlines");
    var links = headlines.find("a");
    var curX = headlines.offset().left;
    var linkWidth = links.eq(0).outerWidth();
    var animId;

    headlines.on("mouseenter", function (e) {
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
