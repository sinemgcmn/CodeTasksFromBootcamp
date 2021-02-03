const fs = require("fs");

function mapSizes(pathToDirectory) {
    const fileObj = fs.readdirSync(pathToDirectory, { withFileTypes: true });
    const newObj = {};
    fileObj.forEach((file) => {
        // console.log(file);
        if (file.isFile()) {
            // console.log(file);
            const stats = fs.statSync(pathToDirectory + "/" + file.name);
            const sizeNum = stats.size;
            newObj[file.name] = sizeNum;
        } else if (file.isDirectory) {
            newObj[file.name] = mapSizes(pathToDirectory + "/" + file.name);
        }
    });
    return newObj;
}

const sizeMap = mapSizes("/Users/sinemgocmenuyarer/desktop/Part-2");
fs.writeFileSync("files.json", JSON.stringify(sizeMap, null, 4));
