(function () {
    var textarea = $("textarea");

    try {
        textarea.val(localStorage.getItem("previousText"));
    } catch (e) {}

    textarea.on("input", function (e) {
        try {
            localStorage.setItem("previousText", textarea.val());
        } catch (e) {}
    });
})();
