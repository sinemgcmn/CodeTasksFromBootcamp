const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myProjects = require("./projects.json");
console.log("myProjects: ", myProjects);

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("welcome", {
        myProjects,
    });
});

app.listen(8080, () => console.log("Server Running!"));
