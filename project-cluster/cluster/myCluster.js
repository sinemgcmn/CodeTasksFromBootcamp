//The cluster module allows you to create multiple node instances that can all handle requests.
//The main purpose of this is take advantage of multi-core systems.
//It is more efficient to divide up work between multiple processes running simultaneously than to have only one process do everything.

const cluster = require("cluster");
const os = require("os");
console.log("os.cpus().length:", os.cpus().length);

cluster.setupMaster({
    exec: __dirname + "/index.js",
});

//To create a new process you call cluster.fork.
for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

//An important thing to keep in mind when using cluster is that none of the processes involved share memory.
//Each process has its own copy of every variable, function, and module you use.
