const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");
const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "myUser" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/project-pane", [auth, express.static("/project-pane")]);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    if (req.url == "/cookies" || req.cookies.authenticated) {
        next();
    } else {
        res.cookie("lastUrl", req.url);
        res.redirect("/cookies");
    }
});

app.get("/", (req, res) => {
    res.send("hello");
});

app.use(express.static("./projects"));

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
    console.log(req.body);
    if (accept) {
        res.cookie("authenticated", "true");
        res.redirect(req.cookies.lastUrl);
    } else {
        res.send(`
            <h1>Sorry, you cannot use this website without accepting cookies</h1>
        `);
    }
});

app.listen(8080, () => console.log("I am listening"));
