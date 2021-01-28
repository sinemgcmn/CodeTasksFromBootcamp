(function (countries) {
    // console.log("countries", countries);
    var resultsContainer = $(".results");
    var searchField = $("input");

    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            method: "GET",
            data: {
                q: userInput,
            },
            success: function (responseData) {
                console.log("responseData:", responseData);
                var htmlForCountries = "";
                if (responseData.length == 0) {
                    htmlForCountries = "<p>Nothing to see here...</p>";
                } else {
                    for (var j = 0; j < responseData.length; j++) {
                        htmlForCountries +=
                            "<p class='country'>" + responseData[j] + "</p>";
                    }
                }
                resultsContainer.html(htmlForCountries);
            },
        });

        // IF the input field is empty, no countries should be shown
        if (searchField.val() == "") {
            resultsContainer.addClass("no-display");
        }
        if (!searchField.val() == "") {
            resultsContainer.removeClass("no-display");
        }
    });

    //2-mouseover - on "p" tags (the countries)
    resultsContainer.on("mouseover", "p", function () {
        var p = $(".results p");
        console.log(p);
        p.removeClass("highlight");
        $(this).addClass("highlight");
    });

    //3-mousedown - on "p" tags (the countries)
    resultsContainer.on("mousedown", "p", function (e) {
        var targ = e.target;
        var targText = targ.innerHTML;
        searchField.val(targText);
    });

    //4-keydown - on the document
    $(document).on("keydown", function (e) {
        var p = $(".results p");
        if (e.which == 38 && !p.hasClass("highlight")) {
            p.eq(0).addClass("highlight");
            return;
        }
        if (e.which == 40 && !p.hasClass("highlight")) {
            p.eq(p.length - 1).addClass("highlight");
            return;
        }
        var current = $(".highlight");

        if (e.which == 38) {
            current.removeClass("highlight");
            current.prev().addClass("highlight");
        } else if (e.which == 40) {
            current.removeClass("highlight");
            current.next().addClass("highlight");
        } else if (e.which == 13) {
            searchField.val(current.html());
        }
    });

    //6-blur - happens on input field - this just means you've clicked OUT of an input field
    searchField.blur(function () {
        searchField.css("background-color", "darkgrey");
        resultsContainer.addClass("no-display");
    });

    //5-focus - happens on input field - this just means you've clicked into an input field
    searchField.focus(function () {
        searchField.css("background-color", "lightblue");
        // resultsContainer.removeClass("no-display");
    });
})();
