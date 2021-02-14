let { readdir, stat } = require("fs");
const { promisify } = require("util");

readdir = promisify(readdir);
stat = promisify(stat);

function logSize(pathToDirectory) {
    readdir(pathToDirectory, { withFileTypes: true })
        .then((items) => {
            items.forEach((item) => {
                if (item.isFile()) {
                    stat(pathToDirectory + "/" + item.name).then((stats) => {
                        console.log(
                            pathToDirectory + "/" + item.name + ":" + stats.size
                        );
                    });
                } else {
                    logSize(pathToDirectory + "/" + item.name);
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

logSize("/Users/sinemgocmenuyarer/desktop/fun-with-fs").then(() => {
    console.log("done");
});
