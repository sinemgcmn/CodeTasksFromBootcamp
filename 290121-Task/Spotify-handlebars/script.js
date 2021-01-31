(function () {
    ////////////// DO NOT TOUCH ///////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ////////////// DO NOT TOUCH ///////////////

    var more = $(".more");
    more.hide();
    var nextUrl = "";
    var userInput;
    var artistOrAlbum;

    //submit button check
    $(".submit-button").on("click", function () {
        //console.log('I clicked the button')
        userInput = $("input").val();
        // console.log(userInput);
        artistOrAlbum = $("select").val();
        // console.log(artistOrAlbum);
        makeAjaxRequest("https://spicedify.herokuapp.com/spotify");
    });

    more.on("click", function () {
        // console.log("I clicked the more button");
        makeAjaxRequest(nextUrl, true);
    });

    function makeAjaxRequest(urlToMakeRequestTo, moreButtonClicked) {
        $.ajax({
            method: "GET",
            url: urlToMakeRequestTo,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log(response);

                if (response.items.length) {
                    $("#result-info").html(
                        'Showing results for "' + userInput + '"'
                    );
                } else {
                    $("#result-info").html("No results found! :(");
                }
                //adding next 20 to the end of the first batch
                var resultsHtml = callSpotify(response.items);
                if (moreButtonClicked) {
                    $(".results-container").append(resultsHtml);
                } else {
                    $(".results-container").html(resultsHtml);
                }

                //getting next 20 by replacing the url
                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                console.log(response.next);

                //if there is no next batch, do not show the more button, otherwise show it
                if (response.next == null) {
                    more.css("display", "none");
                }
                if (location.search.indexOf("scroll=infinite") > -1) {
                    more.css("display", "none");
                    infiniteCheck();
                } else {
                    more.toggle();
                }
            },
        });
    }

    function callSpotify(items) {
        // var resultsHtml = "";

        for (var i = 0; i < items.length; i++) {
            var defaultImage =
                "https://www.scdn.co/i/_global/twitter_card-default.jpg";

            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }

            var dataStamp = {
                name: items[i].name,
                images: items[i].images,
                url: items[i].external_url.spotify,
            };
            $(".results").html(Handlebars.templates.template(dataStamp));
        }
        return items;
    }

    function infiniteCheck() {
        var reachedBottom =
            $(window).scrollTop() + $(window).height() >=
            $(document).height() - 300;

        // console.log("reachedBottom: ", reachedBottom);
        if (reachedBottom) {
            makeAjaxRequest(nextUrl, true);
        } else {
            setTimeout(infiniteCheck, 1000);
        }
    }
    infiniteCheck();
})();
