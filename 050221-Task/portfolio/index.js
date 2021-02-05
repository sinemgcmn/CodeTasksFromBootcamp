// allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require("http");
//allows you to work with the file system on your computer.
const fs = require("fs");
//It is a module contains several helper functions to help make path manipulation easier.
const path = require("path");

http.createServer((req, res) => {
    req.on("error", (err) => console.log(" err in req:", err));
    res.on("error", (err) => console.log(" err in req:", err));
    //for this project, we are only interested in GET requests
    //so you should handle other requests by redirecting or sending an appropriate error.
    if (req.method != "GET") {
        console.log(" not a get request, not okay");
        //The request method is known by the server but has been disabled and cannot be used.
        //The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
        res.statusCode = 405;
        //with return we don't accidentally call res.end()
        return res.end();
    }

    //This function takes a path (in the form of a string) and strips it of duplicate slashes and normalizes directory abbreviations
    //with this way,  it generates any type of traversal into its actual path
    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);

    // keep intruders out
    //The startsWith() method determines whether a STRING begins with the characters of a specified STRING.
    if (!requestedFilePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; // forbidden
        console.log("YOU SHALL NOT PASS!");
        return res.end();
    }

    // /The fs.stat() method is used to return information about the given file or directory. It returns an fs.Stat
    //OBJECT which has several properties and methods to get details about the file or directory.
    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            console.log(
                "sorry, we do not have any project that you are looking for!"
            );
            res.statusCode = 404; //not found
            return res.end();
        }
        if (stats.isDirectory()) {
            // console.log("here is a directory request");
            // console.log("filepath to project directory:", requestedFilePath);
            if (req.url.endsWith("/")) {
                //The function fs.createReadStream() allows you to open up a readable stream in a very simple manner.
                //It turns out that the response (as well as the request) objects are streams. So we will use this fact to create a http server that streams the files to the client.
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "/index.html"
                );
                res.setHeader("content-type", "text/html");
                //pipe the response to the stream request
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml", err);
                    res.statusCode = 500; // The server has encountered a situation it doesn't know how to handle.
                    return res.end();
                });
            } else {
                // we simply want to redirect the user to the req.url, but add a slash to it
                // you did this business of redirecting yesterday with http-request-listners
                // remember to set your headers, send your status code and end your response
            }
        } else {
            console.log("user requested a file:", requestedFilePath);
            // this means we want to stream and pipe the requested file
            // to figure out the correct headers to set
            console.log(
                "file ext of requested file is:",
                path.extname(requestedFilePath)
            );
            res.setHeader("Content-Type", "text/css"); // CAREFUL YOU WANT TO  MAKE THIS DYNAMIC
        }
    });
}).listen(8080, () => console.log(" I m listening"));
