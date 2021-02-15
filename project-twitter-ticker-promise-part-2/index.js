const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

// serve our ticker project
app.use(express.static("./project-ticker"));

//handle the request for data of headlines from the clientside
app.get("/headlines.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            return Promise.all([
                getTweets(bearerToken, "nytimes"),
                getTweets(bearerToken, "CNN"),
                getTweets(bearerToken, "Reuters"),
            ])
                .then((tweets) => {
                    const nyTweets = tweets[0];
                    const cnnTweets = tweets[1];
                    const reutersTweets = tweets[2];

                    const mergedTweets = [
                        ...nyTweets,
                        ...cnnTweets,
                        ...reutersTweets,
                    ];
                    // console.log(mergedTweets);

                    const sortedTweets = mergedTweets.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    // console.log(sortedTweets);

                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in Promise.all: ", err);
                    res.sendStatus(500);
                });
        })
        .catch((err) => {
            console.log("err in getToken: ", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("twitter api project listening..."));
