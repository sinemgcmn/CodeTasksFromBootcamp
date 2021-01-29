(function () {
    //DO NOT TOUCH THIS CODE//
    //generate HTML dynamically using values that can only be known at runtime
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //DO NOT TOUCH THIS CODE//

    var fennelObj = {
        name: "Fennel",
        nickname: "Fennelites",
        favouriteFoods: ["Pizza", "Sushi", "Chocalate"],
        skills: {
            javascript: true,
        },
    };

    var spiced = {
        cohorts: [
            {
                name: "Fennel",
                nickname: "Fennelites",
                favouriteFoods: ["Pizza", "Sushi", "Chocalate"],
                skills: {
                    javascript: true,
                },
            },

            {
                name: "Adobo",
                nickname: "Fennelites",
                favouriteFoods: ["Pizza", "Sushi", "Chocalate"],
                skills: {
                    javascript: true,
                },
            },

            {
                name: "Jasmine",
                nickname: "Fennelites",
                favouriteFoods: ["Pizza", "Sushi", "Chocalate"],
                skills: {
                    javascript: true,
                },
            },
        ],
    };

    $(".fennel-info").html(Handlebars.templates.fennel(spiced));
    //fennel is the id of script coming from HTML
    //this method connects our obj
})();
