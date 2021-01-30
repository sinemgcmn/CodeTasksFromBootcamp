(function () {
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
                // console.log(response);

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

                //if there is no next batch, do not show the more button, otherwise show it
                if (response.next == null) {
                    more.css("display", "none");
                } else {
                    more.toggle();
                }
            },
        });
    }

    function callSpotify(items) {
        var resultsHtml = "";

        if (items.length > 0) {
            resultsHtml =
                "<p>" + 'Results for "' + userInput + '" 🎃 ' + "</p>";
        } else if (items.length == 0) {
            resultsHtml += "<p>Nothing to see here...</p>";
        }

        for (var i = 0; i < items.length; i++) {
            var defaultImage =
                "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }
            var exUrl = items[i].external_urls.spotify;

            resultsHtml +=
                "<a href=" +
                exUrl +
                '">' +
                "<div>" +
                items[i].name +
                "</div>" +
                '<img src="' +
                defaultImage +
                '"/> </a>';
        }
        return resultsHtml;
    }
})();
