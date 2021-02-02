var myUrl = process.argv[2];


function getAndParse(newUrl) {
    const url = require("url");
    const myObj = url.parse(newUrl);
    console.log(
        `
    The protocol is ${myObj.protocol}
    The host is  ${myObj.host}
    The hostname is ${myObj.hostname}
    The port is ${myObj.port}
    The pathname is ${myObj.pathname}
    The query is ${myObj.query}
    `
    );
    getStringParse(myObj.query);
}

getAndParse(myUrl);

function getStringParse(test) {
    const querystring = require("querystring");
    const myStr = querystring.parse(test);
    for (const property in myStr) {
        console.log(
            `The value of the ${property} parameter is ${myStr[property]}`
        );
    }
}

getStringParse();
