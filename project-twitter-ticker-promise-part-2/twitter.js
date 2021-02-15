const { twitterKey, twitterSecret } = require("./secrets");
// above we are requiring the secret authentication info from the secrets.json
const util = require("util");
const https = require("https");

module.exports.getToken = function getToken() {
    return new Promise(function (resolve, reject) {
        let credentials = `${twitterKey}:${twitterSecret}`;
        let encodedCredentials = Buffer.from(credentials).toString("base64");
        const req = https.request(
            {
                host: "api.twitter.com",
                path: "/oauth2/token",
                method: "POST",
                headers: {
                    Authorization: `Basic ${encodedCredentials}`,
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                },
            },
            function (response) {
                console.log("hello");
                if (response.statusCode != 200) {
                    reject(new Error("statusCode=", response.statusCode));
                    return;
                }
                let body = "";
                response.on("data", (chunk) => {
                    body += chunk;
                });

                response.on("end", () => {
                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody.access_token);
                });
            }
        );
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function getTweets(bearerToken, source) {
    console.log("running getTweets with the token:", bearerToken, source);
    return new Promise(function (resolve, reject) {
        const req = https.request(
            {
                host: "api.twitter.com",
                path: `/1.1/statuses/user_timeline.json?screen_name=${source}&tweet_mode=extended`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + bearerToken,
                },
            },
            function (response) {
                console.log("hello");
                if (response.statusCode != 200) {
                    reject(new Error("statusCode=", response.statusCode));
                    return;
                }
                let body = "";
                response.on("data", (chunk) => {
                    body += chunk;
                });
                response.on("end", () => {
                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody);
                });
            }
        );
        req.end("grant_type=client_credentials");
    });
};

module.exports.filterTweets = function filterTweets(tweets) {
    let myArray = [];
    for (let i = 0; i < tweets.length; i++) {
        let tweet = tweets[i];
        let hrefLink = "";
        let tweetUrls = tweet.entities.urls;
        let fullText = tweet.full_text;
        let medias = tweet.entities.media;

        if (tweetUrls != null) {
            for (let j = 0; j < tweetUrls.length; j++) {
                if (fullText.search(tweetUrls[j].url)) {
                    hrefLink = tweetUrls[j].url;
                }
                fullText = fullText.replace(tweetUrls[j].url, "");
            }

            if (medias != null) {
                for (let j = 0; j < medias.length; j++) {
                    fullText = fullText.replace(medias[j].url, "");
                }
            }

            myArray.push({ headline: fullText, link: hrefLink });
        }
        console.log(myArray);
    }
    return myArray;
};
