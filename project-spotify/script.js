(function () {
    var more = $(".more");
    more.hide();
    var nextUrl;

    $(".submit-button").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        // console.log("user data:", userInput, "-", artistOrAlbum);
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                callSpotify(response, userInput);
            },
        });
    });

    $(".more").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        $.ajax({
            method: "GET",
            url: nextUrl,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                callSpotify(response, userInput);
            },
        });
    });

    function callSpotify(response, userInput) {
        response = response.artists || response.albums;
        console.log("response:", response);
        var resultsHtml = "";
        resultsHtml = "<p>" + 'Results for "' + userInput + '" 🎃 ' + "</p>";

        if (response.items.length == 0) {
            resultsHtml += "<p>Nothing to see here...</p>";
        } else {
            for (var i = 0; i < response.items.length; i++) {
                var defaultImage =
                    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

                if (response.items[i].images.length > 0) {
                    defaultImage = response.items[i].images[0].url;
                }
                var exUrl = response.items[i].external_urls.spotify;

                resultsHtml +=
                    "<a href=" +
                    exUrl +
                    '">' +
                    "<div>" +
                    response.items[i].name +
                    "</div>" +
                    '<img src="' +
                    defaultImage +
                    '"/> </a>';
            }
        }
        $(".results-container").html(resultsHtml);
        // console.log("response.next:", response.next);

        ///More button check

        if (response.next == null) {
            more.css("display", "none");
        } else {
            more.toggle();
            nextUrl =
                response.next &&
                response.next.replace(
                    "api.spotify.com/v1/search",
                    "spicedify.herokuapp.com/spotify"
                );
        }
    }
})();
