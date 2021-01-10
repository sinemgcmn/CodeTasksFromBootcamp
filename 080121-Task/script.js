/*1-Write a function named logType that expects a single argument 
and logs a different string depending on the type/value of the argument that is passed to it. 
The string it logs should be one of the followin*/

function logType(param) {
    if (typeof param === "undefined") {
        console.log("undefined!");
    } else if (typeof param === "null") {
        console.log("null!");
    } else if (typeof param === "number") {
        console.log("number!");
    } else if (typeof param === "NaN") {
        console.log("not a number!");
    } else if (typeof param === "string") {
        console.log("string!");
    } else if (typeof param === "boolean") {
        console.log("boolean!");
    } else if (typeof param === "bigint") {
        console.log("bigint!!");
    } else if (typeof param === "function") {
        console.log("function!");
    } else if (typeof param === "object") {
        console.log("object!");
    } else if (typeof param === "array") {
        console.log("array!");
    } else {
        console.log("I have no idea");
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
console.log(isNaN(0 / 0));

//string test
logType("I am learning coding!");

//boolean test
logType(true);

//bigInt
logType(5364546431345n);

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

//isArray method
console.log(Array.isArray(d));

/*2- Copy the following object into your code:*/

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

for (var property in a) {
    console.log(`${property}: ${a[property]}`);
    // console.log(property, a[property]);
}

var b = {};
b.Germany = "Berlin";
b.France = "Paris";
b["New York"] = "USA";

console.log(b);

// Write a while or for loop that counts down from 10 to 1, logging each number to the console.

//For loop from 10 to 1

for (var i = 10; i > 0; i--) {
    console.log(i);
}

// //while ...

var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
