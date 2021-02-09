const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/cookies", (req, res) => {
    res.send(`
        <h2>
        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.
        Our cookie policy has more information and you can change your settings.
        By checking this box you accept our cookie policy.
        </h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 10%">
            <div>
                <input type="checkbox" name="accept"><span>Do you accept our cookie policy?</span>
            </div>
            <button> Accept </submit>
        </form>
    `);
});

app.post("/cookies", (req, res) => {
    const { accept } = req.body;
    console.log("req.body: ", req.body);
    if (accept) {
        res.cookie("authenticated", "true");
        res.redirect("/" + req.url);
    } else {
        res.send(`
            <h1>Sorry, you cannot use this site without accepting cookies</h1>
        `);
    }
});

app.use(express.static("./projects"));

app.use((req, res, next) => {
    let userUrl = `${req.url}`;

    if (
        userUrl != "/cookies" &&
        userUrl != "/" &&
        userUrl == "./projects" + userUrl
    ) {
    }
    res.redirect("/cookies");
    next();
});

app.listen(8080, () => console.log("I am listening"));
