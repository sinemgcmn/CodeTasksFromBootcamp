var text = $("textarea");
var button = $("button");
var userInput;

text.on("input", function () {
    userInput = text.val();
});

function IsJsonString(userInput) {
    try {
        JSON.parse(String(userInput));
        alert("this is json");
    } catch (error) {
        alert("no json");
    }
}

button.on("click", function () {
    IsJsonString(userInput);
});
