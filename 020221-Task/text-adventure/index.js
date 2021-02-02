const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk"); // npm pkg that allows us to make our console more colorful

const story = {
    q: "Is it the weekend yet?",
    answers: {
        yes: {
            q: "great what are your plans",
            answers: {
                idk: "Oh well no need to know everthing",
                chill: "well the weather is cold anyway...",
            },
        },
        no: "ohhhhh that's too bad for you :( ....",
    },
};

function askQuestion(storyObj) {
    rl.question(chalk.bgMagenta(storyObj.q), (answer) => {
        // check if the user has given us an answer we can understand
        if (answer == "yes") {
            rl.question(
                chalk.bgMagenta(storyObj.answers[answer].q),
                (answer2) => {
                    if (storyObj.answers[answer].answers[answer2]) {
                        console.log(storyObj.answers[answer].answers[answer2]);

                        rl.close();
                    }
                }
            );
        } else if (answer == "no") {
            console.log(storyObj.answers[answer]);
            rl.close();
        } else {
            console.log("I dont understand what are you saying!!!");
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);
