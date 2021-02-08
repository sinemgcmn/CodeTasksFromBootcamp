const fs = require("fs");

module.exports.projectOverviewList = function () {
    // console.log("function in another module running");
    const fileObjs = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });
    console.log(fileObjs);
    // console.log(__dirname);
    let resultsHtml = "";
    fileObjs.forEach((file) => {
        if (file.isDirectory()) {
            resultsHtml += `<a href="/${file.name}">${file.name}</a>`;
        }
    });
    console.log(resultsHtml);
    let list = `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>myprojects</title>
            </head>
            <body>
            ${resultsHtml}
            </body>
            </html>
            `;
    return list;
};
