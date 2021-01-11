/*1-Write a function named logType that expects a single argument 
and logs a different string depending on the type/value of the argument that is passed to it. 
The string it logs should be one of the followin*/

function logType(val) {
    if (val === null) {
        console.log("null!");
    } else if (Array.isArray(val)) {
        console.log("array!");
    } else if (typeof val == "object") {
        console.log("object!");
    } else if (typeof val == "bigint") {
        console.log("bigint!");
    } else if (Number.isNaN(val)) {
        console.log("not a number!");
    } else if (typeof val == "number") {
        console.log("number!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else {
        console.log("i have no idea!");
    }
}

//undefined - undefined
var z;
logType(z);

//null - typeof null = object for legacy reasons
var n = null;
logType(n);

console.log(n === null);

//number
logType(15);

//NaN
logType(0 / 0);

//string test
logType("I am learning coding!");

//boolean test
logType(true);

//function
function test(a, b) {
    a > b ? a : b;
}
logType(test);

//object
var objTest = {
    name: "sinem",
    surname: "uyarer",
};
logType(objTest);

//array test
var d = [1, 2, 3];
logType(d);

/*2- Copy the following object into your code:*/

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var city in a) {
    var country = a[city];
    b[country] = city;
}

console.log(b);

// Write a while or for loop that counts down from 10 to 1, logging each number to the console.

//For loop from 10 to 1

for (var i = 10; i > 0; i--) {
    console.log(i);
}
