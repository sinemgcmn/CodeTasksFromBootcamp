(function () {
    /*
        Scope: variable access.
        We don't have access to every variable everywhere in our javascript files!
        We have two* different types of scope: local and global 
        *technically three, but we will talk about the third later in the course
    */

    /*
        Local scope: a variable declared in a function only exists within that function.
        In other words, if you declare a variable in a function, you can only 
        use that variable in that function!
        Because of this, local scope is sometimes referred to as "function scope"
    */

    function fn() {
        var name = "ivana";
    }

    console.log(name); // throws error! because "name" is local to "fn"
    fn();

    /* 
        Global scope - a variable declared OUTSIDE of a function.  
        Variables declared outside of a function can be accessed from anywhere within 
        the JS file you're in, AND even from other JS files in the project!
        It's generally considered bad practice to declare variables in global scope
    */
    var name = "ivana";
    function fn() {
        // does something
    }

    console.log(name);
    fn();

    /*
        side-note about console.log
        "console.log" allows us to see what value a variable has!
        It exists for US, the developer, to see what a variable is. 
        But it does not do anything in our code!
    */

    /*
        Hoisting - in both local and global scope, JS will process variable and function declarations before it assigns them values.
        Generally avoid hoisting as it can make code a bit harder to read. But sometimes
        we can't avoid it :)
    */

    // because of "hoisting," the following three snippets are all functionally the same!
    var a = 100;
    var b = 200;

    var a, b;
    a = 100;
    b = 200;

    a = 100;
    b = 200;
    var a, b;

    // functions are hoisted, too :)
    fn2();

    function fn2() {
        console.log("morning :)");
    }

    /*
        Function - a block of code that performs a task.
        They allow us to automate tasks. If you have a task you want to do multiple times, but that task in a function, and then call that function whenever you need the task done!
        Within functions we can use the "return" keyword. "return" allows us to use whatever values comes after it OUTSIDE of the function
    */

    function square(number) {
        // "number" is in local scope
        // whatever value is passed to "square" when it's called
        // is stored in the "number" variable
        return number * number;
    }

    // here I "call" or "invoke" my function
    // whatever value "square(10)" returns will be stored in "squaredNumber"
    var squaredNumber = square(10);

    console.log(squaredNumber);

    /* 
        function expression - another way of writing functions. They are not subject to hoisting!
        Know that they exist, but you don't have to use them
    */

    var square = function (number) {
        return number * number;
    };

    square(10);

    /*
        Callbacks - a function that is passed in as an argument to another function
    */
    function fn(myVar) {
        console.log(myVar); // "myVar" is a function!
        // which means we can invoke it like any other function!
        myVar(); // this RUNS my callback
    }

    // call "fn" and pass it a function as an argument!
    fn(function () {
        console.log("I'm the callback! :D");
    });

    // setTimeout - a function we just have available to us in JS
    // first argument - a callback that will run after an amount of time has passed
    // second argument - the amount of time setTimeout should wait (in ms) before
    // running the callback
    setTimeout(function () {
        console.log("setTimeout is running!");
    }, 3000);

    /*
        Immediately Invoked Function Expression (iife - pronounced "iffy")
        An iife is a function that is declared and invoked at the same time!
        Use-case: we like to wrap ALL of our code in a JS file in an iife, because it means EVERY variable we declare will be local to that iife. So generally, you will create a new JS file, wrap ALL of your code in one big iife, and then continue coding as normal
    */
    (function () {
        // I'm an iife!
    })();

    /*
        "arguments" - a variable our functions automatically have access to.
        It is an "array-like" object that contains ALL of the arguments passed to our functions.
        It's array-like, which means you can do array things to it - like access items by its index, loop over them with a for loop, access its length, etc.
        Use-case: you have a function that can receive a variable number of arguments (in other words, we don't know how many arguments the function will receive!)
    */

    function sayHi() {
        console.log(arguments);
        console.log(arguments[1]);
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    sayHi("ivana", "andrea", "david");

    /*
        Recursion - a function that calls itself!
        IMPORTANT - recursive functions MUST have a stopping condition! Otherwise the recursive function will continue calling itself forever!
    */
    function countdown(num) {
        console.log(num);
        if (num === 0) {
            return; // this will end the function
        } else {
            countdown(num - 1);
        }
    }

    countdown(7);

    // hint for exercise #2:
    function waitThenRun() {}

    waitThenRun(function () {});
})();