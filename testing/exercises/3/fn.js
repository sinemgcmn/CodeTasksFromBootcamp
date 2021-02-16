module.exports = function fn(arg) {
    if (typeof arg == "string") {
        var splitString = arg.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    } else if (typeof arg !== "string" && !Array.isArray(arg)) {
        return null;
    } else if (Array.isArray(arg)) {
        if (Array.isArray(arg)) {
            for (let i = 0; i < arg.length; i++) {
                if (typeof arg[i] == "string") {
                    var splitString = arg[i].split("");
                    var reverseArray = splitString.reverse();
                    var joinArray = reverseArray.join("");
                    arg.shift();
                    arg.unshift(joinArray);
                    arg.pop();
                    arg.push(null);
                }
                return arg;
            }
        }
    }
};
