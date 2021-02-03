// fs = file system that is one of the core modules of Node
const fs = require("fs");

function logSize(pathToDirectory) {
    fs.readdir(pathToDirectory, { withFileTypes: true }, (err, items) => {
        if (err) {
            throw err;
        } else {
            items.forEach((item) => {
                if (item.isFile()) {
                    fs.stat(
                        pathToDirectory + "/" + item.name,
                        function (err, stats) {
                            if (err) {
                                console.log(err, "oops");
                            } else {
                                console.log(
                                    pathToDirectory +
                                        "/" +
                                        item.name +
                                        ":" +
                                        stats.size
                                );
                            }
                        }
                    );
                } else if (item.isDirectory()) {
                    logSize(pathToDirectory + "/" + item.name);
                }
            });
        }
    });
}

logSize("/Users/sinemgocmenuyarer/desktop/fun-with-fs");
