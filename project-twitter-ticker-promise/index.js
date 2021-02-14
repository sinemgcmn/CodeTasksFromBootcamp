const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

// serve our ticker project
app.use(express.static("./project-ticker"));

//handle the request for data of headlines from the clientside
app.get("/headlines.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            return getTweets(bearerToken);
        })
        .then((tweets) => {
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        })
        .catch((err) => {
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("twitter api project listening..."));
