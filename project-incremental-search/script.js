(function (countries) {
    // console.log("countries", countries);
    var resultsContainer = $(".results");
    var searchField = $("input");

    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();
        var matchResults = [];
        var htmlForCountries = "";
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                matchResults.push(countries[i]);
            }
            if (matchResults.length >= 4) {
                break;
            }
        }

        if (matchResults.length == 0) {
            htmlForCountries = "<p>Nothing to see here...</p>";
        }

        // IF the input field is empty, no countries should be shown
        if (searchField.val() == "") {
            resultsContainer.addClass("no-display");
        }
        if (!searchField.val() == "") {
            resultsContainer.removeClass("no-display");
        }

        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";
        }

        resultsContainer.html(htmlForCountries);
    });

    //2-mouseover - on "p" tags (the countries)
    resultsContainer.on("mouseover", "p", function () {
        var p = $(".results p");
        console.log(p);
        p.removeClass("highlight");
        $(this).addClass("highlight");
    });

    //3-mousedown - on "p" tags (the countries)
    resultsContainer.on("mousedown", "p", function (e) {
        var targ = e.target;
        var targText = targ.innerHTML;
        searchField.val(targText);
    });

    //4-keydown - on the document
    $(document).on("keydown", function (e) {
        var p = $(".results p");
        if (e.which == 38 && !p.hasClass("highlight")) {
            p.eq(0).addClass("highlight");
            return;
        }
        if (e.which == 40 && !p.hasClass("highlight")) {
            p.eq(p.length - 1).addClass("highlight");
            return;
        }
        var current = $(".highlight");

        if (e.which == 38) {
            current.removeClass("highlight");
            current.prev().addClass("highlight");
        } else if (e.which == 40) {
            current.removeClass("highlight");
            current.next().addClass("highlight");
        } else if (e.which == 13) {
            searchField.val(current.html());
        }
    });

    //6-blur - happens on input field - this just means you've clicked OUT of an input field
    searchField.blur(function () {
        searchField.css("background-color", "darkgrey");
        resultsContainer.addClass("no-display");
    });

    //5-focus - happens on input field - this just means you've clicked into an input field
    searchField.focus(function () {
        searchField.css("background-color", "lightblue");
        // resultsContainer.removeClass("no-display");
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "CÃƒÂ´te D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao PeopleÃ¢â‚¬â„¢s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
