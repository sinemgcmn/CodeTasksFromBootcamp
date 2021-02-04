//Require the http module
const http = require("http");

//Use the createServer method of that module to create your server. You can pass a request listener (a function that handles requests) to that function.
const server = http.createServer((request, response) => {
    let body = "";
    //The request object will have method, url, and headers properties.
    const { headers, method, url } = request;
    //You should listen for 'error' events on both
    request.on("error", (err) => console.log(err));
    response.on("error", (err) => console.log(err));

    console.log(request.headers, request.method, request.url);

    if (request.method == "GET") {
        request
            .on("data", function (chunk) {
                body += chunk;
            })
            .on("end", function () {
                console.log(body); //logs the entire request body
            });
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.end(`<!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!</p>
                </html>`);
    }

    if (request.method == "HEAD") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.end();
    }

    if (request.method == "POST") {
        request
            .on("data", function (chunk) {
                body += chunk;
            })
            .on("end", function () {
                console.log(body); //logs the entire request body
            });
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
        return;
    } else {
        response.statusCode = 405;
    }
});

//Call the listen method on your server to start listening for requests. Pass it the port you would like to listen on (use 8080).
server.listen(8080, () => console.log(`I'm listening.`));
