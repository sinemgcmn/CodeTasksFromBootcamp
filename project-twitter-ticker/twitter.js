const { twitterKey, twitterSecret } = require("./secrets");
// above we are requiring the secret authentication info from the secrets.json

const https = require("https");

module.exports.getToken = function getToken(callbackToken) {
    console.log("running getToken");
    // this function get what's called the bearerToken from twitter
    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            // something went wrong with our request,
            // we are passing the status error code to our callbackToken function
            callbackToken(response.statusCode);
            return;
        }
        // if we reach this point of the code we have a valid response
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            // console.log("body:", body);
            let parsedBody = JSON.parse(body);
            // console.log("parsedBody:", parsedBody.access_token);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, callbackTweets) {
    console.log("running getTweets with the token:", bearerToken);
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            // something went wrong with our request,
            // we are passing the status error code to our callbackToken function
            callbackTweets(response.statusCode);
            return;
        }
        // if we reach this point of the code we have a valid response
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("body:", body);
            let parsedBody = JSON.parse(body);

            // console.log("parsedBody:", parsedBody.access_token);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackTweets(null, parsedBody);
        });
    }

    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
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
        // console.log(myArray);
    }
    return myArray;
};
