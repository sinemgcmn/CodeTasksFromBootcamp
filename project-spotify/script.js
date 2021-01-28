(function () {
    $(".submit-button").on("click", function () {
        // console.log("button was click");
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        console.log("user data:", userInput, "-", artistOrAlbum);

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response:", response);

                var resultsHtml = "";
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://bitsofco.de/content/images/2018/12/broken-1.png";
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }
                    resultsHtml +=
                        "<div>" +
                        response.items[i].name +
                        "</div>" +
                        '<img src="' +
                        defaultImage +
                        '"/>';
                    // console.log("resultsHtml:", resultsHtml);
                    $(".results-container").html(resultsHtml);

                    console.log("response.next:", response.next);
                    var nextUrl =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "spicedify.herokuapp.com/spotify"
                        );
                    console.log(" nextUrl:", nextUrl);
                }
            },
        });
    });
})();
