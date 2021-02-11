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

app.get("/project/:project/", (req, res) => {
    const project = req.params.project;
    console.log(project);
    const selectedProject = myProjects.find(
        (item) => item.directory == project
    );
    console.log(selectedProject);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    {
        res.render("description", {
            myProjects,
            selectedProject,
        });
    }
});

app.listen(8080, () => console.log("Server Running!"));
