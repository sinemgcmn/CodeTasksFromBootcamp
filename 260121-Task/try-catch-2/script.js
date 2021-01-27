(function () {
    console.log(translateNumberToGerman());

    function translateNumberToGerman() {
        try {
            return [
                "eins",
                "zwei",
                "drei",
                "vier",
                "fünf",
                "sechs",
                "sieben",
                "acht",
                "neun",
                "zehn",
            ][askForNumber() - 1];
        } catch (err) {
            console.log(err);
            return translateNumberToGerman();
        }
    }

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
})();
